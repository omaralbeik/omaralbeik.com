from django.contrib import admin

from . import models

# register models with admin dashboard
admin.site.register(models.Course)
admin.site.register(models.School)
admin.site.register(models.Book)
admin.site.register(models.Quote)
