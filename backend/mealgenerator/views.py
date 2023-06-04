from rest_framework import generics
from .models import FoodCategory
from .serializers import FoodCategorySerializer
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly


from django.views.generic import CreateView
from .models import Food
from .serializers import FoodCreateSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status




class FoodCategoryList(generics.ListAPIView):
    queryset = FoodCategory.objects.all()
    serializer_class = FoodCategorySerializer

    permission_classes = [permissions.AllowAny]

    # # if enabled only authenticated users can view endpoint data
    # permission_classes = [permissions.IsAuthenticated]


# handles POST
class FoodCreateView(APIView):
    serializer_class =FoodCreateSerializer

    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)