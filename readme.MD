This is part of the first sprint. Create user accounts and authentication APIs.


#Video Tutorials <br>
[Sprint-1 Review](https://www.youtube.com/watch?v=rFlxb11Zf5Y&t=405s)<br>
[Containerizing our API](https://www.youtube.com/watch?v=txr1_Eme6nM)

# How to ruun the project
To run the project as is and play around before you make changes
Run the following after cloning the project

Install [docker](https://medium.com/@mosesmbadi/what-is-devops-part-2-containerization-8b8b65cf8f96)

Start by launching the container:
``docker compose up`` <br>

Launch the container migrate the db and create superuser

```
docker exec -ti -u root  82752d8c2b76 /bin/bash
python manage.py createsuperuser
```


# Important files
In this sprint we've created three skeleton apps with starter code

models.py, views.py, serializers.py and urls.py <br>
Models manages our database <br>
views handles requests <br>
serializers convert data from and to json objects <br>



# Django Rest Framework API, Project Structure
Django structures its architecture as apps. Each app to handle a specific function.
eaty <------ Main Django Project (Created by django-admin startproject eaty)<br>
core <------- This handles our user accounts<br>
blog <------- blogging section/food blog<br>
mealgenerator < -------- gets list of food from user, stores, daily generates meal from this list

# Routing and endpoints
eaty > urls.py <---- entrypoint for all urls/routes<br>
eaty > settings.py <---- main settings and config file <br>

Admin login using superuser credentials: http://127.0.0.1:8000/admin <br>
Get a list of users: http://127.0.0.1:8000/users/ <br>
Get a list of Posts: http://127.0.0.1:8000/posts/ <br>
Login API: http://127.0.0.1:8000/api-auth/login/?next=/users/ <br>
API for Food items: http://127.0.0.1:8000/food-categories <br>
User Registration: http://127.0.0.1:8000/api/register/ <br>
(Use a tool like Insomnia and send the POST request with the registration data ) 


 
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

# Sprint-1
To view everything related to Sprint-1 only, checkout to Sprint-1 Branch
For Sprint-1
1. Create the project and the login and registration endpoints
2. Create Food categories/lists endpoint


## Sprint-1 Challenge
This is to challenge your self to see if you've understood the workflow <br>
Create models for meals <br>
then an API endpoint to get a list of Meals <br>
Note the difference between food and Meals <br>
Food > Ugali, Nyama, Skuma, kales <br>
Meal > Ugali & Skuma, Ugali & Nyama <br>

Sprint One ends in **June 11th** <br>
Join our Discord Server for more communication and personalized help <br>
https://discord.gg/CYySyHrq


# Sprint-2
To view everything related to Sprint-2 only, checkout to Sprint-2 Branch
For Sprint-2 
 1. We will add a CI using Github actions
    -  One pipeline will basically to do a build test for all pull requests.
    - The secodn pipeline will be an action that sends a notif to our discord   Server when there is activity on the project
 2. Add Docker and change to PostgresSQL Database
 3. Create a Login page using VueJs

## Sprint-2 Challenge
Using the http://127.0.0.1:8000/food-categories, create a meal from that and store it as a separate model which can be retrieved as an API Endpoint




