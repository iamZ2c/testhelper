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
        db_table = "sug_text"
