from rest_framework import viewsets
from rest_framework import permissions

from . import models, serializers


class SliderViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)

    # return only published items
    queryset = models.Slider.objects.filter(published=True)
    serializer_class = serializers.SliderSerializer
