from rest_framework import viewsets
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response
from rest_framework import permissions

from . import models, serializers
import tags


class ProjectViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)

    # return only published items
    queryset = models.Project.objects.filter(published=True)
    serializer_class = serializers.ProjectSerializer

    # detail route to return project tags
    # .../projects/[project_id]/tags
    @detail_route(methods=['get'])
    def tags(self, request, pk=None):
        project = self.get_object()
        serializer = tags.serializers.TagSerializer(project.tags, many=True)
        return Response(serializer.data)


    # list route to return latest projects
    # .../projects/latest
    @list_route()
    def latest(self, request):
        latest_projects = models.Project.objects.filter(published=True)[:3]
        serializer = self.get_serializer(latest_projects, many=True)
        return Response(serializer.data)
