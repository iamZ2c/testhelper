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
from django.urls import path, re_path

import apitest.views
from apitest.views import *

urlpatterns = [
    # ============================page ==============================
    # 后台
    path('admin/', admin.site.urls),
    # 主页
    path('home/', apitest.views.home),
    # 登陆页面
    path('login/', apitest.views.login),
    # 建议页面
    path('sug/', apitest.views.sug),
    # 帮助页面
    path('help/', apitest.views.opt_help),
    # 项目管理页面
    path('project_list/', apitest.views.project_list),
    # api页面
    re_path('^apis/(?P<pid>.*)/$', apitest.views.open_apis),
    # case页面
    re_path('^cases/(?P<pid>.*)/$', apitest.views.open_cases),
    # 项目设置
    re_path('^project_set/(?P<pid>.*)/$', apitest.views.project_set),
    # 加密解密页面
    path('find_phone/', apitest.views.find_phone),

    # ============================ interface =========================
    # 登陆接口
    path('login_ac/', apitest.views.login_ac),
    # 注册跳转接口
    path('register_ac/', apitest.views.register_ac),
    # 登出接口
    path('logout/', apitest.views.logout),
    # 提交建议接口
    path('sug_ac/', apitest.views.sug_ac),
    # 添加项目接口
    path('create_project/', apitest.views.create_project),
    # 更改项目接口
    path('project_set_save/', apitest.views.project_set_save),
    # 删除项目接口
    path('del_project/', apitest.views.del_project),
    # 页面分发器
    re_path("^child/(?P<eid>.+)/(?P<oid>.*)/$", apitest.views.child),
    # 加密接口
    path('enc/', apitest.views.encrypt),
    # 解密接口
    path('dnc/', apitest.views.decrypt),
    # 保存接口备注
    path('save_remark/', apitest.views.save_remark),
    # 获取接口备注
    path('get_remark/', apitest.views.get_remark),
    # 获取当前时间
    path('get_localtime/', apitest.views.get_localtime),
    # ================= super mall  ===
    path('home/multidata/', apitest.views.sup_mall_data_home_mul),

]
