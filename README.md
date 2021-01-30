# Mediyoga
Aplicación de una escuela de yoga hecha con Graphql y react.js en el frontend contiene pruebas unitarias <br>

## Paquetes y librerias utilizados 
- [React](https://es.reactjs.org/) Se usó para la creación de las vistas con hooks.
- [create-react-app](https://es.reactjs.org/docs/create-a-new-react-app.html) Se usó para la creación inicial  del proyecto
- [apollo/client](https://www.npmjs.com/package/@apollo/client)Se usó para las consultas al servidor
- [graphql](https://www.npmjs.com/package/graphql)
- [node-fetch](https://www.npmjs.com/package/node-fetch)Se usó para poder consultar al servidor
- [SweetAlert2](https://sweetalert2.github.io/)Se usó para poder mostrar alertas en la aplicación
- [node-mailer](https://nodemailer.com/about/) Se usó para el cambio de contraseña (Backend)
- [twilio](https://www.twilio.com/docs) Se usó para notificar al usuario via sms cuando se da de alta en alguna clase (Backend)
- [Jest](https://jestjs.io/en/) Se usó para realizar el testing de la aplicación
- [Enzyme](https://github.com/wojtekmaj/enzyme-adapter-react-17) Se usó para facilitar el testing de la aplicación

## El diseño lo obtuve de la siguiente liga
 [dribble-yoga](https://cdn.dribbble.com/users/2301995/screenshots/9025364/media/6a84675cd90819417d42fbd9d862c4b7.jpg)

![!Mira mi trabajo¡ :3](https://res.cloudinary.com/israreactivo/image/upload/v1611690743/LoginYoga_nsqlub.png)
![!Mira mi trabajo¡ :3](https://res.cloudinary.com/israreactivo/image/upload/v1611690762/bannerYoga_kn6q98.png)
![!Mira mi trabajo¡ :3](https://res.cloudinary.com/israreactivo/image/upload/v1611690832/yoga_horarios_lnfb9q.png)
## Instalación 
Comando para instalar las dependencias necesarias:
```javascript
npm install
```

## Correr la aplicación en desarrollo:
```javascript
npm start
```


## Construir la aplicación para producción:
```javascript
npm run build
```

### existe un bug al hacer el deploy del backend con nodemailer y gmail tienes que permitir DisplayUnlockCaptcha para que puedas recuperar tu contraseña
- [DisplayUnlockCaptcha](https://accounts.google.com/b/0/DisplayUnlockCaptcha)
