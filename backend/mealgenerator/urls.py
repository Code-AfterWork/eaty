from django.urls import path
from .views import FoodCategoryList, FoodCreateView

urlpatterns = [
    path('foods/', FoodCategoryList.as_view(), name='foods-list'),
    path('foods/create/', FoodCreateView.as_view(), name='food-create'),

]
