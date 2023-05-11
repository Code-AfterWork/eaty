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


# Alternatively, if you want more control over the serialization
# of the Food objects, you can create a separate serializer for
# the Food model and use it within the FoodCategorySerializer:

# class FoodSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Food
#         fields = ['name']

# class FoodCategorySerializer(serializers.ModelSerializer):
#     foods = FoodSerializer(many=True)

#     class Meta:
#         model = FoodCategory
#         fields = ['name', 'foods']

