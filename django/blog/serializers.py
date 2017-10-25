from rest_framework import serializers
import markdown2

from . import models


class PostSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()
    html_text = serializers.SerializerMethodField()

    class Meta:
        fields = (
            'type',
            'url_title',
            'id',
            'title',
            'summary',
            'html_text',
            'published_at',
            'tags',
        )
        model = models.Post

    def get_type(self, post):
        return 'post'

    # return post's text as HTML!
    def get_html_text(self, post):
        return markdown2.markdown(post.text, extras=['target-blank-links', 'fenced-code-blocks',])
