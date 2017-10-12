from rest_framework import serializers

from . import models


class BookSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()
    cover_url = serializers.SerializerMethodField()

    class Meta:
        fields = (
            'type',
            'id',
            'name',
            'author',
            'cover_url',
            'purchase_url',
            'read_at',
            'rating',
            'review',
            'tags',
        )
        model = models.Book

    def get_type(self, book):
        return 'book'

    # return book's cover url if available!
    def get_cover_url(self, book):
        return book.cover.url if book.cover else ''


class SchoolSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()
    course_count = serializers.SerializerMethodField()
    courses = serializers.SerializerMethodField()
    logo_url = serializers.SerializerMethodField()

    class Meta:
        fields = (
            'type',
            'id',
            'name',
            'logo_url',
            'website_url',
            'tags',
            'course_count',
            'courses',
        )
        model = models.School

    def get_type(self, school):
        return 'school'

    # return all courses for school
    def get_courses(self, school):
        return models.Course.objects.filter(
            school_id=school.id).values_list('id', flat=True)

    # return course count for school
    def get_course_count(self, school):
        return models.Course.objects.filter(school_id=school.id).count()

    # return school's logo url if available
    def get_logo_url(self, school):
        return school.logo.url if school.logo else ''


class CourseSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()
    school_name = serializers.SerializerMethodField()
    school_url = serializers.SerializerMethodField()
    logo_url = serializers.SerializerMethodField()

    class Meta:
        fields = (
            'type',
            'id',
            'title',
            'subtitle',
            'description',
            'logo_url',
            'page_url',
            'current',
            'started_at',
            'graduated_at',
            'rating',
            'review',
            'school',
            'school_name',
            'school_url',
            'tags',
        )
        model = models.Course

    def get_type(self, course):
        return 'course'

    # return course's school name
    def get_school_name(self, course):
        return course.school.name

    # return course's school url
    def get_school_url(self, course):
        return course.school.website_url if course.school.website_url else ''

    # return course's logo url if available
    def get_logo_url(self, course):
        return course.logo.url if course.logo else ''


class QuoteSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()

    class Meta:
        fields = (
            'type',
            'id',
            'quote',
            'author',
            'author_job_title',
            'tags',
        )
        model = models.Quote

    def get_type(self, quote):
        return 'quote'
