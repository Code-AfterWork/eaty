from django.db import models
from django.contrib.auth.models import User
from accounts.models import Profile, CustomUser

class FoodCategory(models.Model):
    id = models.AutoField(primary_key=True)
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.category


class Food(models.Model):
    food = models.CharField(max_length=100)
    category = models.ForeignKey(FoodCategory, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, default='1')
    
    def __str__(self):
        return self.food


## model to store generated meals from react
class GeneratedMeal(models.Model):
    id= models.AutoField(primary_key=True)
    meal= models.CharField(max_length=100)

    def __str__(self):
        return self.meal
