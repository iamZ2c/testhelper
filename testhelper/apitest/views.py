from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from apitest.models import SugText, Project


# Create your views here.


def welcome(request):
    return render(request, template_name='home.html')


# 页面分发器
def child(request, eid, oid):
    if eid == 'home':
        return render(request, 'home.html', {"username": request.user.username})
    elif eid == 'project_manage':
        res = child_json(eid)
        return render(request, 'project_manage.html', res)


# 数据分发器
def child_json(eid):
    res = {}
    if eid == 'project_manage':
        data = Project.objects.all()
        res = {"projects": data}
        print(res)
    return res


# 主页需要登录++++
@login_required
def home(request):
    return render(request, 'home.html', {
        "username": request.user.username
    })


# 登陆页面
def login(request):
    return render(request, 'login.html')


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


# 退出平台
def logout(request):
    auth.logout(request)
    return HttpResponseRedirect('/login')


@login_required
def sug(request):
    return render(request, 'suggest.html', {
        "username": request.user.username
    })


# 获取吐槽文本
@login_required
def sug_ac(request):
    print(request.user.username)
    SugText.objects.create(user_account=request.user.username, sug_text=request.GET['sug_text'])
    print(request.GET['sug_text'])
    return HttpResponse('success')


# 帮助页面
@login_required
def opt_help(request):
    return render(request, 'opt_help.html')


# 删除项目方法
@login_required
def del_project(request):
    pid = request.GET['pid']
    Project.objects.filter(pid=pid).delete()
    return HttpResponse('')


# 添加项目方法
@login_required
def create_project(request):
    user = request.user.username
    p_name = request.GET['p_name']
    p_mark = request.GET['p_mark']
    Project.objects.create(name=p_name, mark=p_mark, username=user)
    return HttpResponse('')
