# Serverless Framework Node HTTP API on AWS

Este proyecto está realizado con node js sobre el framework serverless

## Basic
Por temás de demostración se creó un usuario, para que puedas desplegar deberás tener configurado tu aws cli, para este proyecto en particular tenemos:

```bash
Clave de acceso:-
Clave de acceso secreta:-
```
No te preocupes por las credenciales ya que son de prueba y eventualmente serán eliminadas, Sin embargo son necesarias para que puedas desplegar

## Usage
Debido a que estaba en desarrollo puedes correrlo localmente usando el comando
```bash
serverless offline start
```

## Test
Para los test se está usando jest, y se hacen algunas validaciones básicas como el correcto mapeo o la correcta devolución de mensajes.
```bash
npx jest
```

### Deployment
simplemente se usará el comando descrito aqui abajo, si deseas ver las lineas que se van ejevutando, simoplemente agrega "--verbose" al final
```
$ serverless deploy
```
una vez finalizado el despliegue se te mostrará una lista con los endpoints disponibles

### Invocation
Una vez desplegado puedes usar la herramienta de tu elección, yo uso postman

### Local development
como ya mencioné puedes trabajar localmente usando 
```bash
serverless offline start
```
todo ya se encuentra configurado.
