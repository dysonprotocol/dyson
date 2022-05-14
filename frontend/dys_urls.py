from django.urls import re_path, path, include
import mini_api


node_info_patterns = [
    path('node_info', mini_api.node_info,name='node-info'),
]

urlpatterns = [
    re_path('^_/', include(node_info_patterns)),
    re_path(r'^.*', mini_api.dys_view,name='dys-view'),
]
