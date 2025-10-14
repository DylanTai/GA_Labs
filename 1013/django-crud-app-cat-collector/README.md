# Cat Collector (Django)

A simple Django app to track cats, their feedings, and toys. Built per your instructions.

## Quickstart

```bash
# 1) Database
dropdb catcollector || true
createdb catcollector

# 2) Environment
pipenv install
pipenv shell

# 3) Django setup
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py createsuperuser  # follow prompts
python3 manage.py runserver
```

Visit http://127.0.0.1:8000/

## Notes
- `main_app/static/images/` is intentionally empty — clone assets yourself if needed.
- Login at the home page, or sign up using the "Sign Up" link.
- CRUD for cats and toys; feedings tracked per cat.
