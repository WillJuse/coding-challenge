from rest_framework.routers import DefaultRouter
from .api import ReferralsViewSet

router = DefaultRouter()
router.register(r'referrals', ReferralsViewSet)

urlpatterns = router.urls
