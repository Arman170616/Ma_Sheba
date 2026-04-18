from rest_framework import viewsets, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from .models import BoardMember, Member, NewsItem, GalleryItem
from .serializers import BoardMemberSerializer, MemberSerializer, NewsItemSerializer, GalleryItemSerializer


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def admin_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user and user.is_staff:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'username': user.username})
    return Response({'error': 'ব্যবহারকারীর নাম বা পাসওয়ার্ড সঠিক নয়।'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
def admin_logout(request):
    request.user.auth_token.delete()
    return Response({'message': 'লগআউট সফল হয়েছে।'})


class BoardMemberViewSet(viewsets.ModelViewSet):
    queryset = BoardMember.objects.all()
    serializer_class = BoardMemberSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

    def get_queryset(self):
        qs = Member.objects.all()
        if not (self.request.user and self.request.user.is_staff):
            qs = qs.filter(show_on_site=True)
        return qs


class NewsItemViewSet(viewsets.ModelViewSet):
    queryset = NewsItem.objects.all()
    serializer_class = NewsItemSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

    def get_queryset(self):
        qs = NewsItem.objects.all()
        if not (self.request.user and self.request.user.is_staff):
            qs = qs.filter(published=True)
        return qs


class GalleryItemViewSet(viewsets.ModelViewSet):
    queryset = GalleryItem.objects.all()
    serializer_class = GalleryItemSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

    def get_queryset(self):
        qs = GalleryItem.objects.all()
        if not (self.request.user and self.request.user.is_staff):
            qs = qs.filter(published=True)
        return qs
