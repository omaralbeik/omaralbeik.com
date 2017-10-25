from django.db import models
from markdownx.models import MarkdownxField
from utils.helpers import generate_url_name


class Project(models.Model):
    name = models.CharField(max_length=255, unique=True)
    url_name = models.CharField(max_length=255, editable=False, default='')
    logo = models.ImageField(upload_to='projects', blank=True)
    summary = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    # markdown text, API will serve this as HTML!
    text = MarkdownxField(blank=True)

    website_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)

    # API will not serve the project unless published is set to True
    published = models.BooleanField(default=False)
    released_at = models.DateField(blank=True, null=True)

    # project courses
    course = models.ForeignKey('learning.Course', blank=True, null=True)

    # post tags
    tags = models.ManyToManyField('tags.Tag', blank=True)

    def save(self, *args, **kwargs):
        self.url_name = generate_url_name(self.name)
        super(Project, self).save(*args, **kwargs)

    class Meta:
        ordering = ['-released_at', 'name']

    def __str__(self):
        return self.name if self.published else self.name + " (draft)"
