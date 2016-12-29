from rest_framework.generics import ListAPIView

from .serializers import ReferralsSerializer
from .models import Referrals

class ReferralsApi(ListAPIView):
    queryset = Referrals.objects.all();
    serializer_class = ReferralsSerializer
