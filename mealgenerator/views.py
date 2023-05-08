from rest_framework import generics
from .models import Foods
from .serializers import FoodSerializer

class FoodList(generics.ListCreateAPIView):
    queryset = Foods.objects.all()
    serializer_class = FoodSerializer

class FoodDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Foods.objects.all()
    serializer_class = FoodSerializer

