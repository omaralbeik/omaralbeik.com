from rest_framework import serializers

from . import models


class TagSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()
    share_name = serializers.SerializerMethodField()

    class Meta:
        fields = (
            'type',
            'id',
            'name',
            'share_name',
        )
        model = models.Tag

    def get_type(self, tag):
        return 'tag'

    def get_share_name(self, tag):
        return tag.name.replace(' ', '_').lower()
