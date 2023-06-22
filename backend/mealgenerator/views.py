from rest_framework import generics
from .models import FoodCategory
from .serializers import FoodCategorySerializer, GeneratedMealSerializer, GeneratedMealHistSerializer
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly


from django.views.generic import CreateView
from .models import Food, GeneratedMeal
from .serializers import FoodCreateSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class FoodList(generics.ListAPIView):
    queryset = FoodCategory.objects.all()
    serializer_class = FoodCategorySerializer

    permission_classes = [permissions.AllowAny]


class FoodCategoryList(APIView):
    def get(self, request):
        categories = FoodCategory.objects.all()
        return Response(categories.values())
    
    permission_classes = [permissions.AllowAny]



# handles POST for uploaded foods
class FoodCreateView(APIView):
    serializer_class =FoodCreateSerializer

    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    



# handle POST for generated meals
class GeneratedMealView(APIView):
    serializer_class = GeneratedMealSerializer

    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

# gets generated meals
class GeneratedMealHist(generics.ListAPIView):
    queryset = GeneratedMeal.objects.all()
    serializer_class = GeneratedMealHistSerializer

    permission_classes = [permissions.AllowAny]    