from django.contrib.auth.models import User
from django.db import models
from markdownx.models import MarkdownxField
from utils.helpers import generate_url_name


class PostManager(models.Manager):
    def get_queryset(self):
        return super(PostManager, self).get_queryset().filter(published=True)


class Post(models.Model):
    title = models.CharField(max_length=255)
    url_title = models.CharField(max_length=255, editable=False, default='')

    summary = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    # markdown text, API will serve this as HTML!
    text = MarkdownxField()

    # API will not serve the post unless published is set to True
    published = models.BooleanField(default=False)
    published_at = models.DateTimeField(blank=True)

    # post tags
    tags = models.ManyToManyField('tags.Tag', blank=True)

    objects = models.Manager()
    visible = PostManager()

    def save(self, *args, **kwargs):
        self.url_title = generate_url_name(self.title)
        super(Post, self).save(*args, **kwargs)

    def __str__(self):
        return self.title if self.published else self.title + " (draft)"

    class Meta:
        ordering = ['-published_at', '-created_at', ]
