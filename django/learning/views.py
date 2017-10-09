from rest_framework import viewsets
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response
from rest_framework import permissions

from . import models, serializers
import tags


class BookViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = models.Book.objects.all()
    serializer_class = serializers.BookSerializer

    # detail route to return book tags
    # .../learning/books/[book_id]/tags
    @detail_route(methods=['get'])
    def tags(self, request, pk=None):
        book = self.get_object()
        serializer = tags.serializers.TagSerializer(book.tags, many=True)
        return Response(serializer.data)


class CourseViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = models.Course.objects.all()
    serializer_class = serializers.CourseSerializer

    # detail route to return course tags
    # .../learning/courses/[course_id]/tags
    @detail_route(methods=['get'])
    def tags(self, request, pk=None):
        course = self.get_object()
        serializer = tags.serializers.TagSerializer(course.tags, many=True)
        return Response(serializer.data)

    # detail route to return school info for a course
    # .../learning/courses/[course_id]/school
    @detail_route(methods=['get'])
    def school(self, request, pk=None):
        course = self.get_object()
        school = course.school
        serializer = serializers.SchoolSerializer(school, many=False)
        return Response(serializer.data)

    # list route to return current courses
    # .../learning/courses/current
    @list_route(methods=['get'])
    def current(self, request):
        current_courses = models.Course.objects.filter(current=True)
        serializer = serializers.CourseSerializer(current_courses, many=True)
        return Response(serializer.data)

class SchoolViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = models.School.objects.all()
    serializer_class = serializers.SchoolSerializer

    # detail route to return school tags
    # .../learning/schools/[school_id]/tags
    @detail_route(methods=['get'])
    def tags(self, request, pk=None):
        school = self.get_object()
        serializer = tags.serializers.TagSerializer(school.tags, many=True)
        return Response(serializer.data)

    # detail route to return all courses of school
    # .../learning/schools/[school_id]/courses
    @detail_route(methods=['get'])
    def courses(self, request, pk=None):
        school = self.get_object()
        courses = models.Course.objects.filter(school_id=school.id)
        serializer = serializers.CourseSerializer(courses, many=True)
        return Response(serializer.data)


class QuoteViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = models.Quote.objects.all()
    serializer_class = serializers.QuoteSerializer

    # detail route to return quote tags
    # .../learning/quotes/[quote_id]/tags
    @detail_route(methods=['get'])
    def tags(self, request, pk=None):
        quote = self.get_object()
        serializer = tags.serializers.TagSerializer(quote.tags, many=True)
        return Response(serializer.data)
