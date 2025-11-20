from django.urls import path
from . import views

urlpatterns = [
    path('profiles/', views.ProfileListCreateView.as_view(), name='profile-list-create'),
    path('profiles/<int:pk>/', views.ProfileDetailView.as_view(), name='profile-detail'),
    path('events/', views.EventListCreateView.as_view(), name='event-list-create'),
    path('events/<int:pk>/', views.EventDetailView.as_view(), name='event-detail'),
]
