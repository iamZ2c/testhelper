from django.db import models


# Create your models here.
# 建议回收表
class SugText(models.Model):
    user_account = models.CharField(max_length=20, null=True)
    sug_text = models.CharField(max_length=200, null=True)
    create_time = models.DateTimeField(auto_now_add=True, null=True, auto_created=True)

    def __str__(self):
        return self.sug_text + str(self.create_time)

    class Meta:
        db_table = "test_sug_text"


# 项目列表
class Project(models.Model):
    name = models.CharField(max_length=100, null=True)  # 项目名字
    mark = models.CharField(max_length=1000, null=True)  # 项目备注
    username = models.CharField(max_length=15, null=True)  # 项目创建者名字
    other_user = models.CharField(max_length=100, null=True)  # 项目其他创建者名字

    def __str__(self):
        return str(self.name)

    class Meta:
        db_table = "test_project"


# 接口表
class Api(models.Model):
    project_id = models.CharField(max_length=10, null=True)  # 项目id
    name = models.CharField(max_length=100, null=True)  # 接口名字
    api_method = models.CharField(max_length=10, null=True)  # 请求方式
    api_url = models.CharField(max_length=1000, null=True)  # url
    api_header = models.CharField(max_length=1000, null=True)  # 请求头
    api_login = models.CharField(max_length=10, null=True)  # 是否带登陆态
    api_host = models.CharField(max_length=100, null=True)  # 域名
    des = models.CharField(max_length=100, null=True)  # 描述
    body_method = models.CharField(max_length=20, null=True)  # 请求体编码格式
    api_body = models.CharField(max_length=1000, null=True)  # 请求体
    result = models.TextField(null=True)  # 返回体 因为长度巨大，所以用大文本方式存储
    sign = models.CharField(max_length=10, null=True)  # 是否验签
    file_key = models.CharField(max_length=50, null=True)  # 文件key
    file_name = models.CharField(max_length=50, null=True)  # 文件名
    public_header = models.CharField(max_length=1000, null=True)  # 全局变量-请求头

    def __str__(self):
        return self.name

    class Meta:
        db_table = "test_apis"