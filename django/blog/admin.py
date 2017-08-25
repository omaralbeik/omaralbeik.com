from django.contrib import admin
from markdownx.admin import MarkdownxModelAdmin

from . import models

# register post model with admin dashboard with markdown support!
admin.site.register(models.Post, MarkdownxModelAdmin)
