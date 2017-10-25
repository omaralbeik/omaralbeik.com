import string
from django.utils.http import urlquote

def generate_url_name(name):
    table = str.maketrans({key: None for key in string.punctuation})
    name = str(name).translate(table).replace(' ', '-').lower()
    return urlquote(name)
