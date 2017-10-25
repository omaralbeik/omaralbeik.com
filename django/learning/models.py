from django.db import models
from utils.helpers import generate_url_name


class Book(models.Model):
    name = models.CharField(max_length=255)
    url_name = models.CharField(max_length=255, editable=False, default='')
    author = models.CharField(max_length=255, blank=True)
    cover = models.ImageField(upload_to='books', blank=True)
    purchase_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    read_at = models.DateField(blank=True, null=True)
    rating = models.IntegerField(blank=True)
    review = models.TextField(blank=True)

    # book tags
    tags = models.ManyToManyField('tags.Tag', blank=True)

    def save(self, *args, **kwargs):
        self.url_name = generate_url_name(self.name)
        super(Book, self).save(*args, **kwargs)

    class Meta:
        ordering = ['-read_at', 'author', 'name', ]

        # assuming same title might be used for many books by many authors
        # the combination of both book name and book author should be unique
        unique_together = ['name', 'author', ]

    def __str__(self):
        return self.name


class School(models.Model):
    name = models.CharField(max_length=255, unique=True)
    url_name = models.CharField(max_length=255, editable=False, default='')
    logo = models.ImageField(upload_to='schools', blank=True)
    website_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    # school tags
    tags = models.ManyToManyField('tags.Tag', blank=True)

    def save(self, *args, **kwargs):
        self.url_name = generate_url_name(self.name)
        super(School, self).save(*args, **kwargs)

    class Meta:
        ordering = ['name', ]

    def __str__(self):
        return self.name


class Course(models.Model):
    title = models.CharField(max_length=255)
    url_title = models.CharField(max_length=255, editable=False, default='')
    subtitle = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    logo = models.ImageField(upload_to='courses', blank=True)
    page_url = models.URLField(blank=True)
    summary_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    current = models.BooleanField(default=False)
    started_at = models.DateField(blank=True, null=True)
    graduated_at = models.DateField(blank=True, null=True)
    rating = models.IntegerField(blank=True)
    review = models.TextField(blank=True)

    school = models.ForeignKey(School)

    # course tags
    tags = models.ManyToManyField('tags.Tag', blank=True)

    def save(self, *args, **kwargs):
        self.url_title = generate_url_name(self.title)
        super(Course, self).save(*args, **kwargs)

    class Meta:
        ordering = ['current', '-graduated_at', '-started_at', 'school', 'title', ]

    def __str__(self):
        return self.title if not self.current else self.title + " (current)"


class Quote(models.Model):
    quote = models.TextField(unique=True)
    author = models.CharField(max_length=140, blank=True)
    author_job_title = models.CharField(max_length=48, blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)

    # quote tags
    tags = models.ManyToManyField('tags.Tag', blank=True)

    class Meta:
        ordering = ['-created_at', 'author', ]

    def __str__(self):
        return self.quote
