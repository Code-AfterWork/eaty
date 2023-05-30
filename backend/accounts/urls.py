from django.urls import path
from . import views
from .views import *

urlpatterns = [
     path('home/', views.HomeView.as_view(), name ='home'),
     path('logout/', views.LogoutView.as_view(), name ='logout'),

     path('users/register/', UserViewSet.as_view({'get': 'list', 'post': 'create'}), name = 'register'),
          
     # user_view = UserViewSet.as_view({'get': 'list', 'post': 'create'})
]