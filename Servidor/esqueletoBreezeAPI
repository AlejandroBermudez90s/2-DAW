## Instalación:
`php artisan breeze:install api`

### Añadir al seguimiento ficheros seleccionados de manera controlada:
```
Cambios a ser confirmados:
  (usa "git restore --staged <archivo>..." para sacar del área de stage)
	nuevo archivo:  app/Http/Middleware/EnsureEmailIsVerified.php
	nuevo archivo:  config/cors.php
	nuevo archivo:  config/sanctum.php
	nuevo archivo:  database/migrations/2026_01_12_092131_create_personal_access_tokens_table.php
	nuevo archivo:  resources/views/.gitkeep
	nuevo archivo:  routes/api.php

Cambios no rastreados para el commit:
  (usa "git add/rm <archivo>..." para actualizar a lo que se le va a hacer commit)
  (usa "git restore <archivo>..." para descartar los cambios en el directorio de trabajo)
	modificado:     app/Providers/AppServiceProvider.php
	modificado:     bootstrap/app.php
	modificado:     composer.json
	modificado:     composer.lock
	modificado:     tests/Feature/Auth/AuthenticationTest.php
	modificado:     tests/Feature/Auth/EmailVerificationTest.php
	borrado:        tests/Feature/Auth/PasswordConfirmationTest.php
	modificado:     tests/Feature/Auth/PasswordResetTest.php
	modificado:     tests/Feature/Auth/RegistrationTest.php
```

### Migrar los cambios en la base de datos:
`php artisan migrate`

### Modificar .env:
`FRONTEND_URL=http://localhost:5174`

### Comprobar config/sanctum.php:
```
'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', sprintf(
        '%s%s%s',
        'localhost,localhost:3000,127.0.0.1,127.0.0.1:3000,127.0.0.1:8000,::1',
        Sanctum::currentApplicationUrlWithPort(),
        env('FRONTEND_URL') ? ','.parse_url(env('FRONTEND_URL'), PHP_URL_HOST) : ''
    ))),
```
