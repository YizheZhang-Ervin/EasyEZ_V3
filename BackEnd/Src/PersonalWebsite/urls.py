from django.contrib import admin
from django.urls import path, include,re_path
from Blog.views import BlogViewSet,MsgViewSet
from rest_framework.routers import DefaultRouter
from django.views.generic import TemplateView
from django.views import static
from PersonalWebsite import settings


router = DefaultRouter()
router.register(r'blog', BlogViewSet, basename='blog')
router.register(r'msg', MsgViewSet, basename='msg')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/',include(router.urls)),
    re_path(r'^static/(?P<path>.*)$', static.serve, {'document_root': settings.STATIC_ROOT}),
    re_path(r'.*', TemplateView.as_view(template_name='index.html'))
]

