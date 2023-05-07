from django.urls import path
from blog import views

urlpatterns = [
    # code omitted for brevity
    path('posts/', views.PostList.as_view()),
    path('posts/<int:pk>/', views.PostDetail.as_view()),
]