from django.contrib import admin

from . import models

# register models with admin dashboard
admin.site.register(models.Tag)
