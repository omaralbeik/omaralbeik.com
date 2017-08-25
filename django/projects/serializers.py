from rest_framework import serializers
import markdown2

from . import models


class ProjectSerializer(serializers.ModelSerializer):
    html_text = serializers.SerializerMethodField()
    logo_url = serializers.SerializerMethodField()

    class Meta:
        fields = (
            'id',
            'name',
            'logo_url',
            'summary',
            'html_text',
            'website_url',
            'github_url',
            'released_at',
            'course',
            'tags',
        )
        model = models.Project

    # return project's text as HTML!
    def get_html_text(self, project):
        return markdown2.markdown(project.text)

    # return project's logo url if available
    def get_logo_url(self, project):
        return project.logo.url if project.logo else ''
