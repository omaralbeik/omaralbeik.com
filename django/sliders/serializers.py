from rest_framework import serializers

from . import models


class SlideSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        fields = (
            'id',
            'image_url',
            'title',
            'subtitle',
            'button_title',
            'button_url',
            'order'
        )
        model = models.Slide

    # return slide's background image url if available
    def get_image_url(self, slide):
        return slide.image.url if slide.image else ''
