from rest_framework import viewsets
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from rest_framework import permissions

from . import models, serializers
import projects
import blog
import learning


class TagViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = models.Tag.objects.all()
    serializer_class = serializers.TagSerializer

    # detail route to return all project with tag
    # .../tags/[tag_id]/projects
    @detail_route(methods=['get'])
    def projects(self, request, pk=None):
        tag = self.get_object()
        porjects = projects.models.Project.objects.filter(tags__in=[tag])
        serializer = projects.serializers.ProjectSerializer(porjects, many=True)
        return Response(serializer.data)

    # detail route to return all blog posts with tag
    # .../tags/[tag_id]/posts
    @detail_route(methods=['get'])
    def posts(self, request, pk=None):
        tag = self.get_object()
        posts = blog.models.Post.objects.filter(tags__in=[tag])
        serializer = blog.serializers.PostSerializer(posts, many=True)
        return Response(serializer.data)

    # detail route to return all schools with tag
    # .../tags/[tag_id]/schools
    @detail_route(methods=['get'])
    def schools(self, request, pk=None):
        tag = self.get_object()
        schools = learning.models.School.objects.filter(tags__in=[tag])
        serializer = learning.serializers.SchoolSerializer(schools, many=True)
        return Response(serializer.data)

    # detail route to return all courses with tag
    # .../tags/[tag_id]/courses
    @detail_route(methods=['get'])
    def courses(self, request, pk=None):
        tag = self.get_object()
        courses = learning.models.Course.objects.filter(tags__in=[tag])
        serializer = learning.serializers.CourseSerializer(courses, many=True)
        return Response(serializer.data)

    # detail route to return all books with tag
    # .../tags/[tag_id]/books
    @detail_route(methods=['get'])
    def books(self, request, pk=None):
        tag = self.get_object()
        books = learning.models.Book.objects.filter(tags__in=[tag])
        serializer = learning.serializers.BookSerializer(books, many=True)
        return Response(serializer.data)

    # detail route to return all quotes with tag
    # .../tags/[tag_id]/quotes
    @detail_route(methods=['get'])
    def quotes(self, request, pk=None):
        tag = self.get_object()
        quotes = learning.models.Quote.objects.filter(tags__in=[tag])
        serializer = learning.serializers.QuoteSerializer(quotes, many=True)
        return Response(serializer.data)
