from rest_framework import serializers

from . import models


class TagSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()

    class Meta:
        fields = (
            'type',
            'id',
            'name',
        )
        model = models.Tag

    def get_type(self, tag):
        return 'tag'
