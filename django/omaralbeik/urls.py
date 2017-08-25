from django.conf import settings
from django.conf.urls import url, include
from django.contrib import admin
from django.views.static import serve

from rest_framework import routers

from blog import views as bv
from projects import views as pv
from tags import views as tv
from learning import views as lv
from sliders import views as sv


router = routers.SimpleRouter()

router.register(r'tags', tv.TagViewSet)
router.register(r'projects', pv.ProjectViewSet)

router.register(r'blog/posts', bv.PostViewSet)

router.register(r'learning/courses', lv.CourseViewSet)
router.register(r'learning/schools', lv.SchoolViewSet)
router.register(r'learning/books', lv.BookViewSet)
router.register(r'learning/quotes', lv.QuoteViewSet)

router.register(r'sliders', sv.SliderViewSet)

urlpatterns = [
    url(r'^markdownx/', include('markdownx.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^api/v1/auth/', include('rest_framework.urls',
                                  namespace='rest_framework')),
    url(r'^api/v1/', include(router.urls, namespace='apiv1')),
]

# Django should not serve media files in production,
# they should be served by server instead

if settings.DEBUG:
    urlpatterns += [
        url(r'^media/(?P<path>.*)$', serve, {
            'document_root': settings.MEDIA_ROOT,
        }),
    ]
