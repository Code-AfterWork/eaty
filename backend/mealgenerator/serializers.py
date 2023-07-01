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
        fields = '__all__'


# handles POST for uploaded foods
class FoodCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Food
        fields = '__all__'



# handle POST for generated meals
class GeneratedMealSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneratedMeal
        fields=('id', 'meal')

# handles GEt for generatedmealshistory
# handle POST for generated meals
class GeneratedMealHistSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneratedMeal
        fields=('id', 'meal')