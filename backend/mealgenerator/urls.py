from django.urls import path
from .views import FoodList, FoodCreateView, FoodCategoryList, GeneratedMealView

urlpatterns = [
    path('foods/', FoodList.as_view(), name='foods-list'),
    path('foods/categories/', FoodCategoryList.as_view(), name='foods-list'),
    path('foods/create/', FoodCreateView.as_view(), name='food-create'),
    path('foods/generatedmeal/', GeneratedMealView.as_view(), name ='generatedmeal'),

]
