from rest_framework.viewsets import ModelViewSet

from .serializers import ReferralsSerializer
from .models import Referrals

class ReferralsViewSet(ModelViewSet):
    queryset = Referrals.objects.all();
    serializer_class = ReferralsSerializer
