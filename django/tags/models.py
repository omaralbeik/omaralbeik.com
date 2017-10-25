from django.db import models
from utils.helpers import generate_url_name


class Tag(models.Model):
    name = models.CharField(max_length=80, unique=True)
    url_name = models.CharField(max_length=255, editable=False, default='')
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.url_name = generate_url_name(self.name)
        super(Tag, self).save(*args, **kwargs)

    class Meta:
        ordering = ['name', ]

    def __str__(self):
        return self.name
