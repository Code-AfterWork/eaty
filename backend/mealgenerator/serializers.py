from rest_framework import serializers
from .models import *

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['name']

class FoodCategorySerializer(serializers.ModelSerializer):
    # foods = FoodSerializer(many=True, read_only=True)
    food = serializers.StringRelatedField(many=True, source='food_set')

    class Meta:
        model = FoodCategory
        fields = ['name', 'food']



