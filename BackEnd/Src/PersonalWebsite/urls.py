from django.contrib import admin
from django.urls import path, include
from Blog.views import BlogViewSet,MsgViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'api/blog', BlogViewSet, basename='blog')
router.register(r'api/msg', MsgViewSet, basename='msg')
urlpatterns = router.urls

urlpatterns += [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
]

