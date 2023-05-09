from rest_framework import generics
from .models import Foods
from .serializers import FoodSerializer
from .permissions import IsCreatorOrReadOnly
from rest_framework import permissions



class FoodList(generics.ListCreateAPIView):
    queryset = Foods.objects.all()
    serializer_class = FoodSerializer

    permission_classes = [IsCreatorOrReadOnly, permissions.IsAuthenticated]

class FoodDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Foods.objects.all()
    serializer_class = FoodSerializer

    # permission_classes = [permissions.AllowAny]

