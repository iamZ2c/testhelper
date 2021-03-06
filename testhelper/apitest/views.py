from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from apitest.models import SugText, Project, Api
from icecream import ic
import json
import requests
import time


# Create your views here.

# =====================================================页面分发器/数据构造器================================================
# 页面分发器
def child(request, eid, oid=None):
    if eid == 'home':
        return render(request, 'home.html', {"username": request.user.username})
    elif eid == 'project_list.html':
        res = child_json(eid)
        return render(request, eid, res)
    elif eid == 'apis.html':
        return render(request, eid, child_json(eid=eid, oid=oid))
    elif eid == 'jiami.html':
        return render(request, eid, child_json(eid=eid, oid=oid))
    elif eid == 'project_set.html':
        return render(request, eid, child_json(eid, oid))
    elif eid == 'cases.html':
        return render(request, eid, child_json(eid, oid))


# 数据分发器
def child_json(eid, oid=None):
    res = {}
    if eid == 'project_list.html':
        data = Project.objects.all()
        res = {"projects": data}
        return res
    elif eid == 'apis.html':
        project = Project.objects.filter(id=oid)[0]
        apis = Api.objects.filter(project_id=oid)
        res = {'project': project,
               'apis': apis,
               }
        return res
    elif eid == 'project_set.html':
        data = Project.objects.filter(id=oid)
        res = {'project': data[0]}
        return res
    elif eid == 'cases.html':
        data = Project.objects.filter(id=oid)
        print(data)
        res = {'project': data[0]}
        return res


# =======================================================页面返回=========================================================
# 项目管理
@login_required
def project_list(request):
    """
    eid = project_list.html
    """
    return child(request, eid='project_list.html', oid=None)


# api页面
@login_required
def open_apis(request, pid):
    """
    项目eid apis.html
    """
    return child(request, eid='apis.html', oid=pid)


# case页面
def open_cases(request, pid):
    """
    cases.html
    """
    return child(request, eid='cases.html', oid=pid)


# 项目设置页面
def project_set(request, pid):
    """
    project_set.html
    """
    ic(pid)
    return child(request, eid='project_set.html', oid=pid)


# 主页
@login_required
def home(request):
    return render(request, 'home.html', {
        "username": request.user.username
    })


# 登陆页面
def login(request):
    return render(request, 'login.html')


# 帮助页面
@login_required
def opt_help(request):
    return render(request, 'opt_help.html')


# 建议界面
@login_required
def sug(request):
    return render(request, 'suggest.html', {
        "username": request.user.username
    })


# 加密解谜页面
def find_phone(request):
    return child(request, eid='jiami.html')


# ===========================================================api========================================================
# 登陆判断方法
def login_ac(request):
    username = request.GET['user_name']
    password = request.GET['pass_word']
    # 开始联调
    user = auth.authenticate(username=username, password=password)

    if user:
        # django 登陆函数
        auth.login(request, user)

        request.session['user'] = username
        return HttpResponse('login success')
    else:

        return HttpResponse('login fail')


# 退出平台
def logout(request):
    auth.logout(request)
    return HttpResponseRedirect('/login')


# 注册账号
def register_ac(request):
    username = request.GET['user_name']
    password = request.GET['pass_word']
    # 开始 联通django用户表
    try:
        user = User.objects.create_user(username=username, password=password)
        user.save()
        return HttpResponse('register success')
    except:
        return HttpResponse('register fail')


# 获取吐槽文本
@login_required
def sug_ac(request):
    print(request.user.username)
    SugText.objects.create(user_account=request.user.username, sug_text=request.GET['sug_text'])
    print(request.GET['sug_text'])
    return HttpResponse('success')


# 删除项目方法
@login_required
def del_project(request):
    pid = request.GET['id']
    Project.objects.filter(id=pid).delete()
    return HttpResponse('')


# 添加项目方法
@login_required
def create_project(request):
    user = request.user.username
    p_name = request.GET['p_name']
    p_mark = request.GET['p_mark']
    Project.objects.create(name=p_name, mark=p_mark, username=user)
    return HttpResponse('')


url = "https://9l80kzfc.fn-boe.bytedance.net/api/kms"
header = {"Content-Type": "application/json"}


# 加密
@login_required
def encrypt(request):
    data = {
        "encrypt": request.GET['text'],
    }
    data = json.dumps(data)
    response = requests.post(url=url, data=data, headers=header)
    a = response.json()['encrypt']
    return HttpResponse(a)


# 解密?
@login_required
def decrypt(request):
    data = {
        "decrypt": request.GET['text']
    }
    data = json.dumps(data)
    response = requests.post(url=url, data=data, headers=header)
    a = response.json()['decrypt']
    return HttpResponse(a)


# 更新项目接口
def project_set_save(request):
    """
    'name': name,
                'mark': mark,
                'other_user': other_user,
    """
    pid = request.GET['pid']
    name = request.GET['name']
    mark = request.GET['mark']
    other_user = request.GET['other_user']
    Project.objects.filter(id=pid).update(name=name, mark=mark, other_user=other_user)
    return HttpResponse('success')


# 保存借口备注
def save_remark(request):
    api_id = request.GET['api_id']
    text = request.GET['remark_text']
    ic(api_id, text)
    Api.objects.filter(id=api_id).update(des=text)
    return HttpResponse('success')


# 获取备注
def get_remark(request):
    api_id = request.GET['api_id']
    res = Api.objects.filter(id=api_id)[0]
    ic(res.des)
    return HttpResponse(res.des)


# 返回dang qian
def get_localtime(request):
    ts = request.GET['time_stamp']
    if ts != '':
        local_time = time.localtime(int(ts))
        local_time = time.strftime("%Y-%m-%d %H:%M:%S", local_time)
        return HttpResponse(local_time)
    else:
        return HttpResponse('erro')


# =============================================================================================

def sup_mall_data_home_mul(request):
    from apitest.super_mall_data import HOME_MULTI_DATA
    # response['Access-Control-Allow-Origin'] = "*"
    #
    # # 允许你携带Content-Type请求头
    # response['Access-Control-Allow-Headers'] = "Content-Type"
    #
    # # 允许你发送DELETE,PUT
    # response['Access-Control-Allow-Methods'] = "DELETE,PUT"

    return HttpResponse(HOME_MULTI_DATA)
