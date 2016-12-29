from rest_framework import serializers

from .models import Referrals

class ReferralsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Referrals
        fields = '__all__'
