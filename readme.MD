## Video Tutorials <br>
[Sprint-1 Review](https://www.youtube.com/watch?v=rFlxb11Zf5Y&t=405s)<br>
[Containerizing our API](https://www.youtube.com/watch?v=txr1_Eme6nM)

# How to run
## Method 1 - With Docker
To run the project as is and play around before you make changes, you should have docker and a preferred code editor installed.

Install [docker](https://medium.com/@mosesmbadi/what-is-devops-part-2-containerization-8b8b65cf8f96)

After cloning the repo locally, run:
``docker compose up`` <br>

This launches all the services required, exec into the backend container, migrate the db and create superuser

```
docker exec -ti -u root  82752d8c2b76 /bin/bash
python manage.py createsuperuser
python manage.py migrate
```

'82752d8c2b76' <-- refers to the container ID. You can get the ID by running 
``docker ps``


## Method 2 - Manually in a Virtual Env
#### If you prefer not using docker (docker images can be data consuming if you're on limited data) you can run manually with this steps
Set Up virtual environment, I'm assuming you have virtualenv installed
Change to sqlite3 in settings by uncommenting and commenting the appropriate sections
```
virtualenv venv
source venv/bin/activate
python backend/manage.py runserver
```


## Study Group
Follow the conversation on Discord [Join Discord Srrver](https://discord.gg/T24PXQS9).


## Important files - Backend
In this sprint we've created three skeleton apps with starter code

models.py, views.py, serializers.py and urls.py <br>
Models manages our database <br>
views handles requests <br>
serializers convert data from and to json objects <br>



## Django Rest Framework API, Project Structure
Django structures its architecture as apps. Each app to handle a specific function.
eaty <------ Main Django Project (Created by ``django-admin startproject eaty``)<br>
accounts <------- This handles our user accounts and authentication<br>
blog <------- blogging section/food blog<br>
mealgenerator < -------- gets list of food from users, stores, daily generates meal from this list

## Routing and endpoints - Backend
./backend/eaty/urls.py <---- entrypoint for all API urls/routes<br>
./backend/eaty/settings.py <---- main settings and config file <br>

Admin login using superuser credentials: http://127.0.0.1:8000/admin <br>
Get a list of users: http://127.0.0.1:8000/users/ <br>
Get a list of Posts: http://127.0.0.1:8000/posts/ <br>
Login API: http://127.0.0.1:8000/api-auth/login/?next=/users/ <br>
List of food categories: http://127.0.0.1:8000/foodcategories/ <br>
API for Food items: http://127.0.0.1:8000/foods <br>
User Registration: http://127.0.0.1:8000/api/register/ <br>
POST generated meal: http://127.0.0.1:8000/foods/generatedmeal/<br>
Generated Meals History: http://127.0.0.1:8000/foods/generatedmealhist/ <br>
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

## Jenkins
Replaced CI/CD on Github Actions with Jenkins
Install Jenkins then follow instructions to run a Tes CI for DRF

## Sprint-1
To view everything related to Sprint-1 only, checkout to Sprint-1 Branch
For Sprint-1
1. Create the project and the login and registration endpoints
2. Create Food categories/lists endpoint


### Sprint-1 Challenge
This is to challenge your self to see if you've understood the workflow <br>
Create models for meals <br>
then an API endpoint to get a list of Meals <br>
Note the difference between food and Meals <br>
Food > Ugali, Nyama, Skuma, kales <br>
Meal > Ugali & Skuma, Ugali & Nyama <br>

Sprint One ends in **June 11th** <br>
Join our Discord Server for more communication and personalized help <br>
https://discord.gg/CYySyHrq


## Sprint-2
To view everything related to Sprint-2 only, checkout to Sprint-2 Branch
For Sprint-2 
 1. We will add a CI using Github actions
    -  One pipeline will basically to do a build test for all pull requests.
    - The secodn pipeline will be an action that sends a notif to our discord   Server when there is activity on the project
 2. Add Docker and change to PostgresSQL Database
 3. Create a Login page using VueJs/React

 ### Sprint-2 Challenge
Using the /foods endpoint, create a meal from that and store it as a separate model which can be retrieved as an API Endpoint

 ## Sprint-3
To view everything related to Sprint-3 only, checkout to Sprint-3 Branch
For Sprint-3
 1. Food upload form that updates list of foods in the db
 2. Meal generate function - generates random food from /foods endpoint
 3. Push image to dockerhub, with automated updates
            - CI to auto update images to dockerhub
 4. Write production Dockerfile and docker compose        


## Screenshots (Sprint3 Update)
![HomePage](screenshots/Screenshot1.png)
![HomePage](screenshots/Screenshot2.png)
![Backend](screenshots/Screenshot3.png)


## Donation
We are going for a real-world example of a DevOps project. There are a few free services we'll use but in some cases we'll need to use premium/paid subscriptions in order to simulate a real-world use case and gain experience. If you feel a little generous and would like to contribute in purchasing any of the services, you can make a donation here or you can reach out to the Community Lead: Moses Mbadi - mbadim@proton.me

[![Donate with PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=45A3RRNJMNAGQ)




