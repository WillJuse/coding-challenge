from django.db import models
from django.utils.encoding import python_2_unicode_compatible

# Create your models here.
@python_2_unicode_compatible
class Referrals(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False, unique=True)
    clicks = models.IntegerField(default=1)

    def __str__(self):
        return "Name: {}".format(self.name);
