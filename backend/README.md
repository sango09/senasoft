# Backend
### Crear entorno virtual

`$ pip install virtualenv`

`$ virtualenv .venv -p python`

### Activar y desactivar entorno virtual

###### Windows CMD

`$ .venv\Scripts\activate`

`$  deactivate`


###### Ubuntu

`$ source .venv/bin/activate`

`$ deactivate`


### Instalar dependencias de pip3

`$ pip3 install -r requirements`

### Migrar los modelos a la bases de datos
`$ python manage.py makemigrations`

`$ python manage.py migrate`

### Iniciar servidor de Django

`$ python3 manage.py runserver`
