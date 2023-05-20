from django.urls import path
from .views import FoodCategoryList

urlpatterns = [
    path('food-categories/', FoodCategoryList.as_view(), name='food-category-list'),
]
