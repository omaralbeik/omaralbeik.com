from django.db import models


class Book(models.Model):
    name = models.CharField(max_length=255)
    author = models.CharField(max_length=255, blank=True)
    cover = models.ImageField(upload_to='books', blank=True)
    purchase_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    read_at = models.DateField(blank=True, null=True)
    rating = models.IntegerField(blank=True)
    review = models.TextField(blank=True)

    # book tags
    tags = models.ManyToManyField('tags.Tag', blank=True)

    class Meta:
        ordering = ['-read_at', 'author', 'name' ]

        # assuming same title might be used for many books by many authors
        # the combination of both book name and book author should be unique
        unique_together = ['name', 'author', ]

    def __str__(self):
        return self.name



class School(models.Model):
    name = models.CharField(max_length=255, unique=True)
    logo = models.ImageField(upload_to='schools', blank=True)
    website_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    # school tags
    tags = models.ManyToManyField('tags.Tag', blank=True)

    class Meta:
        ordering = ['name', ]

    def __str__(self):
        return self.name


class Course(models.Model):
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    logo = models.ImageField(upload_to='courses', blank=True)
    page_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    started_at = models.DateField(blank=True, null=True)
    graduated_at = models.DateField(blank=True, null=True)
    rating = models.IntegerField(blank=True)
    review = models.TextField(blank=True)

    school = models.ForeignKey(School)

    # course tags
    tags = models.ManyToManyField('tags.Tag', blank=True)

    class Meta:
        ordering = ['-graduated_at', '-started_at', 'school', 'title', ]

    def __str__(self):
        return self.title


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
