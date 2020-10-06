# virtual environment
python -m venv xxEnv
xxEnv>activate
>deactivate

# install django framework
pip install django
pip install djangorestframework
pip install django-cors-headers

# start project
django-admin startproject xxProject
python manage.py startapp xxApp

# other commands
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver