from django.db import models

class Slide(models.Model):
    image = models.ImageField(upload_to='sliders', blank=True)
    title = models.CharField(max_length=24)
    subtitle = models.CharField(max_length=120, blank=True)
    button_title = models.CharField(max_length=24, blank=True)
    button_url = models.URLField(blank=True)
    order = models.IntegerField(default=0)

    # API will not serve the slider unless published is set to True
    published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at',]

    def __str__(self):
        return self.title
