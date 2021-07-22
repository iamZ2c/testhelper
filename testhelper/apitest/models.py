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