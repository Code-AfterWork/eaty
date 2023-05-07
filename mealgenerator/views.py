from rest_framework import generics
from .models import Meals
from .serializers import MealSerializer

class MealList(generics.ListCreateAPIView):
    queryset = Meals.objects.all()
    serializer_class = MealSerializer

class MealDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Meals.objects.all()
    serializer_class = MealSerializer

