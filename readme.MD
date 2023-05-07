This is part of the first sprint. Create user accounts and authentication APIs.


# Django Rest Framework API, Project Structure
eaty <------ Main Django Project (Created by django-admin startproject eaty)
core <------- This handles our user accounts
blog <------- blogging section/food blog
mealgenerator < -------- gets list of food from user, stores, daily generates meal from this list

# Routing and endpoints
eaty > urls.py <---- entrypoint for all urls
eaty > settings.py <---- main settings and config file 

# Important files
Important files per app are
In this sprint we've created three skeleton apps with demo code

models.py, views.py, serializers.py and urls.py
Models manages our database
views handle requests
serializers convert data from and to json objects

To run the rproject as is and play around before you make changes
``
virtualenv env
source env/bin/activate
pip install django djangorestframework
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
``

Admin login using superuser credentials: http://127.0.0.1:8000/admin
Get a list of users: http://127.0.0.1:8000/users/
Get a list of Posts: http://127.0.0.1:8000/posts/

Make sure you're in the current sprint branch before commiting and pushing changes
```
(env) :/opt/eaty/eaty$ git branch
  Sprint-1
* main
(env) :/opt/eaty/eaty$ git checkout Sprint-1
Switched to branch 'Sprint-1'
(env) :/opt/eaty/eaty$ git branch
* Sprint-1
  main
```

## Challenge for this sprint
This is to challenge your self to see if you've understood the workflow
Create models for meals
then an API endpoint to get a list of Meals
Note the difference between food and Meals
Food > Ugali, Nyama, Skuma, kales
Meal > Ugali & Skuma, Ugali & Nyama

Sprint One ends in June 11th
Join our Discord Server for more communication and personalized help
https://discord.gg/CYySyHrq



