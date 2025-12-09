# PROFTPD
- Instalar proftpd -> `sudo apt install proftpd`
- Instalar filezilla -> `sudo apt install filezilla`
- Crear usuario local -> `sudo adduser nombreusuario`
- Crear directorio fpt del usuario ->
  ```
  sudo mkdir -p /ftp_nombreusuario
  sudo chown nombreusuario:nombreusuario /ftp_nombreusuario
  ```
- Crear usuario anonimo ->
  ```
  sudo mkdir -p /srv/ftp/incoming
  sudo chown -R ftp:nogroup /srv/ftp
  ```
- Editar `/etc/proftpd/proftpd.conf` (antes de editarlo hacer una copia de seguridad de dicho archivo)
  - `DefaultRoot /ftp_nombreusuario nombreusuario`
  - Verificar que este asi -> `DefaultRoot ~`
  - Verificar que este asi -> `Umask 022 022`
  - Y descomentar la parte del anonimous
- Comprobar sintaxis del archivo de configuracion -> `sudo proftpd --configtest`
- Reiniciar proftpd -> `sudo systemctl restart proftpd`
- Comprobar el estado de proftpd -> `sudo systemctl status proftpd`
- Para conectarnos por terminal -> `ftp 127.0.0.1`
- Subir archivos -> `put algo.txt`
- *Para comrpobar que este todo bien deben haber archivos en los directorios*
  - Para el nombreusuario nos vamos a su directorio en nuestra terminal en local y creamos alli un archivo ->
    ```
    cd /nombreusuario/
    touch algo.txt
    ```
- Creacion de usuarios virtuales ->
  - En el archvio de configuracion de proftpd descomentamos la linea -> `RequiredValidShell off`
  - Añadir a fichero `/etc/shells`, además de los que existen la directica `/bin/false`
  - Añadimos al fichero de configuracion de proftpd la directiva `AuthUserFile` -> `AuthUserFile /etc/proftpd/ftpd.passwd`
  - En la linea de comandos creamos los usuarios (antes hay que crear sus directorios) -> `ftpasswd --passwd --name=juan --uid=1050 --home=/srv/juan --shell=/bin/false`
    - Donde
      - ftpasswd es el comando que añade un usuario virtual al archivo.
      - --passwd indica que vamos a generar una contraseña.
      - --name=juan establece el nombre del usuario.
      - --uid=1050 es el identificador del usuario, un número entero que no debe coincidir con ningún otro usuario.
      - --home=/srv/juan es el directorio de trabajo del usuario virtual.
      - --shell=/bin/false indica que usará un shell no válido.
  - Para hacer comprobaciones creamos un txt en el directorio de los usuarios virtuales y reiniciamos el proftpd