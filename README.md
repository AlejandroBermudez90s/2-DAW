![Logo CIFP Carlos III](./assets/logoC3.png)
# Proyecto 2º DAW - Alejandro Bermúdez

Este repositorio contiene el contenido realizado en el marco del curso de 2º de Desarrollo de Aplicaciones Web (DAW). El objetivo principal de este proyecto es hacer un seguimiento de todo el curso, guardando todos los contenidos principales.

## Descripción
Aquí verás los contenidos más relevantes, con instrucciones y ejemplos explciativos.

## Tecnologías utilizadas

- **Frontend**: React + Vite
- **Backend**: Laravel, Blade
- **Base de datos**: mariadb, mysql
- **Otros**: apache2, nginx

## Instalación

Sigue estos pasos para configurar este proyecto en tu máquina local:

- **antes** de empezar:
  - Por seguridad, es recomendable tener una clave `ssh` un tu equipo local para tus repositorios.
  - Nota:
    _En GitHub se mejoró la seguridad mediante la eliminación de los tipos de clave antiguos y no seguros el 15 de marzo de 2022.
    A partir de esa fecha, ya no se admiten las claves DSA (ssh-dss).
    Las claves RSA (ssh-rsa) con valid_after antes del 2 de noviembre de 2021 pueden seguir usando cualquier algoritmo de firma. 
    Las llaves RSA que se generaron después de esta fecha deberán utilizar un algoritmo de firma de tipo SHA-2. Puede ser que algunos
    clientes antiguos necesiten actualizar para poder utilizar firmas de tipo SHA-2._
    
### Generar clave SSH
* 1: Pega el texto siguiente, reemplazando el correo electrónico usado en el ejemplo por tu dirección de correo electrónico de GitHub.
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```
Cuando se te pida, escriba una contraseña segura.

* 2 : Inicia el agente SSH en segundo plano.
```bash
$ eval "$(ssh-agent -s)"
```

* 3: Agrega tu llave privada SSH al ssh-agent.
```bash
ssh-add ~/.ssh/id_ed25519
```

* 4: Agrega la clave pública de SSH a tu cuenta en GitHub.
  - En la esquina superior derecha de cualquier página en GitHub, haz clic en la fotografía de perfil y luego en  Settings.

  - En la sección "Access" de la barra lateral, haz clic en  SSH and GPG keys.

  - Haga clic en Nueva clave SSH o en Agregar clave SSH.

  - En el campo "Title" (Título), agrega una etiqueta descriptiva para la clave nueva. Por ejemplo, si estás utilizando un portátil personal, puedes llamar a esta clave "Portátil personal".

  - Selecciona el tipo de clave, ya sea de autenticación o de firma. Para más información sobre la firma de confirmación, consulta Acerca de la verificación de firma de confirmación.

  - En el campo "Clave", pega tu clave pública.

  - Haga clic en Agregar clave SSH.

  - Si se te solicita, confirma tu contraseña en GitHub. Para más información, consulta Modo sudo.

 ### Clona este repositorio (con SSH):

   ```bash
   git clone https://github.com/AlejandroBermudez90s/2-DAW.git
   git remote add origin https://github.com/tu_usuario/nombre_repositorio_propio.git
   git remote -v 
   git branch -M main
   git add .
   git commit -m "Inicialización del proyecto"
   git push -u origin main
   ```

## Si encuentras el error "Identidad del autor desconocida", significa que Git no sabe quién eres. Para solucionarlo, configura tu identidad de usuario:

Configura la información de usuario de Git: 
```bash
git config --global user.email "your_email@example.com"
git config --global user.name "Your Name"
```

## Actualiza tu repostorio propio (**local**) con la rama main de este (**remoto**).
- Cada día, actualiza tu propio repositorio para tenerlo a la par que este proyecto.
- Para ello,  neceistas tener un enlace que apunte al remoto, lo llamaremos `upstream`:
```bash
git remote add upstream https://github.com/AlejandroBermudez90s/2-DAW.git
```
Ahora tienes dos enlaces con los que trabajar:
- **origin**: Este enlace apunta a tu repositorio `local`,  aquí desarrollarás tu propio proyecto/trabajo
- **upstream**: Este enlace apunta a este repositorio, es decir, al `remoto`. Este lo usarás para actualizar el tuyo propio
- Para ver los enlaces que tenemos disponibles:
  ```bash
  git remote -v
  ```
## Gaurdar los cambios en local
Cada vez que hagas cualquier cambio, deberás ejecutar:

* 1: Ver en qué rama estás y qué cambios hay por confirmar
```bash
git status
```
* 2: Añadir a seguimiento los cambios
  - Para añadirlo todo
```bash
git add .
```
  - Para añadir ficheros específicos 
```bash
git add <fichero>
```
* 3: Confirmar los cambios
  - Para añadirlo todo
```bash
git commit -m "mensaje opcional"
```
* 4: Subir los cambios a tu repositorio **local** -> `origin`
```bash
git push origin main
```
Esto quiere decir, hacer un **push** a `origin (local)` desde la rama `main`
  - En caso de que hayamos creado una rama nueva para trabajar:
    ```bash
    git push origin nombredelarama
    ```
  - ### ¿Cómo trabajar con ramas?
    Cuando creas una rama, estás trabajando en otra historia del repositorio, a partir del último cambio guardado.
    * Crear una nuva rama:
    ```bash
    git switch -C nombredelarama
    ```
    * Ver en qué rama estás:
    ```bash
    git branch
    ```
    * Cambiar de rama:
    ```bash
    git switch nombredelarama
    ```
    * Ver todas las ramas que tienes:
    ```bash
    git branch -a
    ```
* 5: Traerte los cambios del remoto `upstream` al tuyo `local`:
  ```bash
  git pull upstream main
  ```
  Esto quiere decir, hacer un **pull** de `upstream (remoto)` a la rama `main`.
  - Puede que alguna vez quieras probar los cambios hechos sin afectar a tu rama principal, entonces puedes crear una nueva rama, y trarte los cambios a esa rama.
    ```bash
    git switch -C ramadeprueba
    ```
    ```bash
    git pull upstream ramadeprueba
    ```
  - Ahora podrás ver y probar los cambios en esa nueva rama sin tocar tu rama `main`.
