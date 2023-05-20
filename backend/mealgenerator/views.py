from rest_framework import generics
from .models import FoodCategory
from .serializers import FoodCategorySerializer

class FoodCategoryList(generics.ListAPIView):
    queryset = FoodCategory.objects.all()
    serializer_class = FoodCategorySerializer
