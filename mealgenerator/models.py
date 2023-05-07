from django.db import models

class Meals(models.Model):
    category = models.CharField(max_length=200)
    food1 = models.TextField()
    food2 = models.TextField()
    food3 = models.TextField()
    food4 = models.TextField()
    # pub_date = models.DateTimeField(auto_now_add=True)
    # author = models.CharField(max_length=100)

