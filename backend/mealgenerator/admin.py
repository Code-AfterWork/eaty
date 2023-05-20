from django.contrib import admin

from .models import *


admin.site.register(FoodCategory)
admin.site.register(Food)