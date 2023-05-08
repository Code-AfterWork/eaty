from rest_framework import serializers
from .models import Foods

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Foods
        fields = '__all__'
