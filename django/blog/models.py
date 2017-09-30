from django.contrib.auth.models import User
from django.db import models
from markdownx.models import MarkdownxField


class Post(models.Model):
    title = models.CharField(max_length=255)
    summary = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    # markdown text, API will serve this as HTML!
    text = MarkdownxField()

    # API will not serve the post unless published is set to True
    published = models.BooleanField(default=False)
    published_at = models.DateTimeField(blank=True)

    # post tags
    tags = models.ManyToManyField('tags.Tag', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at', ]
