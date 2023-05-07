from rest_framework import serializers
from django.contrib.auth.models import User


# Django’s users are created from the User model defined in django.contrib.auth.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']