from rest_framework import generics
from .models import FoodCategory
from .serializers import FoodCategorySerializer

from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly


class FoodCategoryList(generics.ListAPIView):
    queryset = FoodCategory.objects.all()
    serializer_class = FoodCategorySerializer

    permission_classes = [permissions.AllowAny]

