from rest_framework import serializers
from .models import *

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['category']

class FoodCategorySerializer(serializers.ModelSerializer):
    # foods = FoodSerializer(many=True, read_only=True)
    food = serializers.StringRelatedField(many=True, source='food_set')

    class Meta:
        model = FoodCategory
        fields = ['id', 'category', 'food']


# handles POST
class FoodCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Food
        fields = ('id', 'category', 'food')

