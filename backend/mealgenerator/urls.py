from django.urls import path
from .views import FoodCategoryList

urlpatterns = [
    path('foods/', FoodCategoryList.as_view(), name='foods-list'),
]
