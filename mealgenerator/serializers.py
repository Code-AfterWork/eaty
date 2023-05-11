from rest_framework import serializers
from .models import FoodCategory, Food

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['name']

class FoodCategorySerializer(serializers.ModelSerializer):
    foods = FoodSerializer(many=True, read_only=True)

    class Meta:
        model = FoodCategory
        fields = ['name', 'foods']
