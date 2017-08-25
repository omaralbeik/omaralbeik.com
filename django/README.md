# omaralbeik.com
Source code for my own website :)


## Dependencies

#### This project requires Python and Django to build, if they are not installed on your device, you should install them first.

1. [Python3](https://www.python.org/downloads/)
2. [Django](https://www.djangoproject.com/)
3. [Django REST Framework](http://www.django-rest-framework.org/)
4. [Markdownx](https://github.com/neutronX/django-markdownx)
5. [Markdown2](https://github.com/trentm/python-markdown2)
6. [Django CORS Headers](https://github.com/ottoyiu/django-cors-headers)


### Install Python dependencies

```bash
$ pip3 install -r requirements.txt
```

---


## Initial Server Setup

1. Collect Static Files

```bash
$ ./manage.py collectstatic
$ ./manage.py migrate
```

2. Create Django Database

```bash
$ ./manage.py makemigrations
$ ./manage.py migrate
```

3. Create Admin account

```bash
$ ./manage.py createsuperuser
```

_Note:_ users info can be changed later from *AUTHENTICATION AND AUTHORIZATION* section in the admin dashboard

---


## Running the server

```bash
./manage.py runserver -p 8000
```

---


## Administration Dashboard

Server admin dashboard can be accessed by visiting the URL `localhost:8000/admin`

_Note:_ Authorization tokens can be generated for users from *AUTH TOKEN* section in the admin dashboard

---


## Data Models:

  - [Blog](server/blog/models.py)
  - [Projects](server/projects/models.py)
  - [Learning](server/learning/models.py)
  - [Tags](server/tags/models.py)


## API Endpoints

### GET Endpoints

##### Blog:
- `/api/v1/blog/posts/`: get all blog posts.
- `/api/v1/blog/posts/<post_id>/`: get specific blog post.
- `/api/v1/blog/posts/<post_id>/tags/`: get specific blog post tags.

##### Projects:
- `/api/v1/projects/`: get all projects.
- `/api/v1/projects/<project_id>/`: get specific project.
- `/api/v1/projects/<project_id>/tags/`: get project tags.

##### Learning:
- `/api/v1/learning/schools/`: get all schools.
- `/api/v1/learning/schools/<school_id>/`: get specific school.
- `/api/v1/learning/courses/`: get all courses.
- `/api/v1/learning/courses/<course_id>/`: get specific course.
- `/api/v1/learning/books/`: get all books.
- `/api/v1/learning/books/<book_id>/`: get specific book.
- `/api/v1/learning/quotes/`: get all quotes.
- `/api/v1/learning/quotes/<quote_id>/`: get specific quote.

##### Tags:
- `/api/v1/tags/`: get all tags.
- `/api/v1/tags/<tag_id>/`: get specific tag.
- `/api/v1/tags/<tag_id>/posts/`: get all blog posts for specific tag.
- `/api/v1/tags/<tag_id>/projects/`: get all projects posts for specific tag.
- `/api/v1/tags/<tag_id>/schools/`: get all schools for specific tag.
- `/api/v1/tags/<tag_id>/courses/`: get all courses for specific tag.
- `/api/v1/tags/<tag_id>/books/`: get all books for specific tag.
- `/api/v1/tags/<tag_id>/quotes/`: get all quotes for specific tag.

##### Sliders:
- `/api/v1/sliders/`: get all sliders.
- `/api/v1/sliders/<slider_id>/`: get specific slider.



### POST Endpoints

##### Blog:
- `/api/v1/blog/posts/`: create blog post.

##### Projects:
- `/api/v1/projects/`: create project.

##### Learning:
- `/api/v1/learning/schools/`: create schools.
- `/api/v1/learning/courses/`: create courses.
- `/api/v1/learning/books/`: create book.
- `/api/v1/learning/quotes/`: create quote.

##### Tags:
- `/api/v1/tags/`: create tag.

##### Sliders:
- `/api/v1/sliders/`: create slider.



### PUT Endpoints

##### Blog:
- `/api/v1/blog/posts/<post_id>/`: update blog post.

##### Projects:
- `/api/v1/projects/<project_id>/`: update project.

##### Learning:
- `/api/v1/learning/schools/<school_id>/`: update school.
- `/api/v1/learning/courses/<course_id>/`: update course.
- `/api/v1/learning/books/<book_id>/`: update book.
- `/api/v1/learning/quotes/<quote_id>/`: update quote.

##### Tags:
- `/api/v1/tags/<tag_id>/`: update tag.

##### Sliders:
- `/api/v1/sliders/<slider_id>/`: update slider.




### DELETE Endpoints

##### Blog:
- `/api/v1/blog/posts/<post_id>/`: delete blog post.

##### Projects:
- `/api/v1/projects/<project_id>/`: delete project.

##### Learning:
- `/api/v1/learning/schools/<school_id>/`: update school.
- `/api/v1/learning/courses/<course_id>/`: update course.
- `/api/v1/learning/books/<book_id>/`: update book.
- `/api/v1/learning/quotes/<quote_id>/`: update quote.

##### Tags:
- `/api/v1/tags/<tag_id>/`: delete tag.

##### Sliders:
- `/api/v1/sliders/<slider_id>/`: delete slider.

---

### JSON Responses

Add `?format=json` to the end of your request url to get response in JSON format.


---

### Authentication Token

_Note:_ Authorization tokens can be generated for users from *AUTH TOKEN* section in the admin dashboard

Add your authentication token in the request header in order to make any request:

  - key: `Authorization`
  - value `Token <Your Token>`
