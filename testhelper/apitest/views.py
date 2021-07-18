from django.contrib import auth
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render


# Create your views here.

# 这里是welecome
def welcome(request):
    return render(request, template_name='home.html')


def child(request, eid, oid):
    return render(request, eid)


# 主页
def home(request):
    return render(request, 'home.html')


# 登陆页面
def login(request):
    return render(request, 'login.html')


# 登陆判断
def login_ac(request):
    username = request.GET['user_name']
    password = request.GET['pass_word']
    # 开始联调
    user = auth.authenticate(username=username, password=password)

    if user:
        return HttpResponseRedirect('/home/')
    else:
        return HttpResponse('')


# 注册账号
def register_ac(request):
    username = request.GET['user_name']
    password = request.GET['pass_word']
    # 开始 联通django用户表
    try:
        user = User.objects.create_user(username=username, password=password)
        user.save()
        return HttpResponse('注册成功')
    except:
        return HttpResponse('注册失败~用户名好像已经存在了~')
