from django.urls import path
from .views import FoodList, FoodDetail

urlpatterns = [
    path('foods/', FoodList.as_view(), name='food_list'),
    path('foods/<int:pk>/', FoodDetail.as_view(), name='food_detail'),
]
