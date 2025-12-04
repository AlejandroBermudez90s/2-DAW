# HOST VIRUTAL HTTP
- Para hacer esto tendremos que tener apache instalado.
- Creamos la estructura de carpeta en ```/var/www/```. ->
    ```sudo mkdir -p /var/www/example.com/public_html```
- Damos permisos. ->
    ```chmod -R 777 example.com```
- En ```/var/www/example.com/public_html``` creamos un fichero .html.
- En ```/etc/apache2/sites-available/``` habra un archivo llamado 000-default.conf. Lo copiamos y lo nombramos como example.com.conf (por ejemplo).
- Dentro de dicho fihero, deberemos modificar o poner las siguientes lineas. ->
    ```
    ServerName example.com
    ServerAlias www.example.com
    ServerAdmin admin@example.com
    DocumentRoot /var/www/example.com/public_html
    ```
- Tambien habra que habilitar el archivo de configuración. ->
    ```sudo a2ensite example.com.conf```
- Y desabilitar el predeterminado. ->
    ```sudo a2dissite 000-default.conf```
- Reiniciar apache. ->
    ```sudo systemctl restart apache2```
        - Usar ```sudo systemctl status apache2``` para comprobar el estado.
- Modificar el archivo ```/etc/hosts/``` y añadir. ->
    ```127.0.0.1 example.com```
- Probar el resultado. ->
    ```http://example.com```

# HOST VIRTUAL HTTPS
- Para poder utilizar el protocolo seguro, debemos tener instalado SSL. ->
    ```
    sudo a2enmod ssl
    service apache2 restart
    ```
- Por otro lado debemos asegurarnos que apache es capaz de escuchar por el puerto 443, asi que comprobamos en ```/etc/apache2/ports.conf``` que haya una linea asi. ->
    ```Listen 443```
- Ahora tendremos que activar el site default-ssl. ->
    ```sudo a2ensite default-ssl```
- Despues, instalaremos open ssl. ->
    ```sudo apt-get install openssl```
- A continuación generaremos la clave. ->
    ```sudo openssl genrsa -out miClave.key 2048```
- Luego creamos la petición de certificado. ->
    ```sudo openssl req -new -key miClave.key -out mipeticion.csr```
- Obtenemos el certificado autofirmado. ->
    ```sudo openssl x509 -req -days 265 -in mipeticion.csr -signkey miclave.key -out micertificado.crt```
- Luego nos llevamos los archivos. ->
    ```
    sudo mv miClave.key /etc/ssl/private
    sudo mv micertificado.crt /etc/ssl/certs
    ```
- Despues generariamos la misma estructura de carpetas. En ```/var/www/``` creariamos una carpeta ```nombre.com``` y dentro la carpeta ```public_html``` con sus ficheros .html y otorgando los permisos.
- A continuacion generaremos un nuevo fichero ssl.com.conf. Por ejemplo ->
    ```sudo cp default-ssl-conf nombre-ssl.com.conf```
- Dentro de dicho archivo modificaremos los parametros que modificamos en el anterior apartado mas otras lineas. ->
    ```
    ServerName example.com
    ServerAlias www.example.com
    ServerAdmin admin@example.com
    DocumentRoot /var/www/example.com/public_html
    SSLCertificateFile /etc/ssl/certs/micertificado.crt
    SSLCertificateKeyFile /etc/ssl/private/miClave.key 
    ```
- Habilitamos el host virtual. ->
    ```sudo a2ensite nombre-ssl.com.conf```
- Recuerda añadir el dominio al archivo de hosts.
- Y por ultimo comprobamos que funcione. ->
    ```https://nombre.com```
# HOST CON CONTROL DE ACCESO
- El control de acceso es mediante grupos, activamos lo que nos hace falta mediante. -> ```sudo a2enmod authz_groupfile```
- Usaremos la misma estructura de directorios que en los apartados anteriores.
- Para crear los usaririos y grupos tendremos que instalar htpasswd. -> ```sudo apt-get install apache2-utils```
- Para crear el usuario pepe -> ```sudo htpasswd -c /var/www/nombre.com/.usuarios pepe```
    - Para añadir mas usuarios quitamos el -c que indica sobreescritura. Por ejemplo -> ```sudo htpasswd /var/www/nombre.com/.usuarios laura```
- El archivo de grupos es un simple archivo de texto tal que asi. ->
    ```
    administradores: pepe laura
    autores: marisa alberto
    ```
    - El cual se llamara .grupos y estara en la misma ubicacion que .usuarios.
- Recordar no tener comas en los archivos.
- Al archivo de configuracion de apache habría que añadirle. ->
    ```
    <Directory "/var/www/nombre.com/public_html">
        AuthType Basic
        AuthName "Nombre y contraseña"
        AuthUserFile "/var/www/nombre.com/.usuarios"
        AuthGroupFile "/var/www/nombre.com/.grupos"
        Require group administradores
    </Directory>
    ```
- Si quisieramos que solo pepe entrara pondriamos. -> ```Require user pepe```
- Para activar el host virutal volveriamos a usar. -> ```sud a2ensite nombre.com.conf```
- Y reiniciamos apache. -> ```sudo service apache2 restart```
