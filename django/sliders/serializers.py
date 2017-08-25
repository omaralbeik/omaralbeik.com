from rest_framework import serializers

from . import models


class SliderSerializer(serializers.ModelSerializer):
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
        model = models.Slider

    # return slider's background image url if available
    def get_image_url(self, slider):
        return slider.image.url if slider.image else ''
