from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('board-members', views.BoardMemberViewSet)
router.register('members', views.MemberViewSet)
router.register('news', views.NewsItemViewSet)
router.register('gallery', views.GalleryItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/login/', views.admin_login),
    path('auth/logout/', views.admin_logout),
]
