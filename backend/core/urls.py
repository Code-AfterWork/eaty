from django.urls import path, include
from core import views
from rest_framework import urlpatterns


from .views import register

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),

    path('api-auth/', include('rest_framework.urls')),

    path('api/register/', views.register.as_view(), name='register'),

]
