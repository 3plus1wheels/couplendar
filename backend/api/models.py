from django.db import models

# Create your models here.

# profile model
class Profile(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=60)
    dob = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.username

# event model
class Event(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    importance = models.IntegerField(default=0)
    recurrence = models.IntegerField(default=0) #bit/decimal based representation of recurrence days
    owner = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='events')

    def __str__(self):
        return self.title