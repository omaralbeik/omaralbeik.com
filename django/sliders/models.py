from django.db import models


class SlideManager(models.Manager):
    def get_queryset(self):
        return super(SlideManager, self).get_queryset().filter(published=True)


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

    objects = models.Manager()
    visible = SlideManager()

    class Meta:
        ordering = ['order', '-created_at', ]

    def __str__(self):
        orderedTitle = "{:d} | {}".format(self.order, self.title)
        return orderedTitle if self.published else orderedTitle + " (draft)"
