"""testhelper URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

import apitest.views
from apitest.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('welcome/', apitest.views.welcome),
    path('home/', apitest.views.home),
    # 登陆页面
    path('login/', apitest.views.login),
    # 登陆接口
    path('login_ac/', apitest.views.login_ac),
    # 注册跳转接口
    path('register_ac/', apitest.views.register_ac),
    # 登出
    path('logout/', apitest.views.logout),
    # 建议页面
    path('sug/', apitest.views.sug),
    # 提交建议
    path('sug_ac/', apitest.views.sug_ac),
    path('help/', apitest.views.opt_help),
    path(r"^child/(?P<eid>.+)/(?P<oid>.*)/$", apitest.views.child),

]
