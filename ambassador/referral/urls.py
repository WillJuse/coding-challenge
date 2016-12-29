from django.conf.urls import url

from .api import ReferralsApi

urlpatterns = [
    url(r'^referrals$', ReferralsApi.as_view()),
]
