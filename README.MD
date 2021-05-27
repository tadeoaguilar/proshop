# Install
npx create-react-app proshop

use RAFCE to create React Arrow Function Component Export

Puedo usar React-Bootstrap
Material-UI

o

Bootswatch
https://bootswatch.com/ - Bajo el CSS y lo importo en el index.js

Instale en Front end

npm install react-bootstrap


use Awesome fonts para poner el icono del carrito y el usuario
Copias el Link y lo pegamos en public/index.html
https://cdnjs.com/libraries/font-awesome


TUve que meter esto dentro de Front End
 npm i react-router-dom react-router-bootstrap

 Tambien en el Fron ten npm i axuis

 

Use Effect

https://dmitripavlutin.com/react-useeffect-explanation/#:~:text=useEffect%20%28%29%20hook%20accepts%202%20arguments%3A%20callback%20is,only%20if%20the%20dependencies%20have%20changed%20between%20renderings.


The dependencies of useEffect()
dependencies argument of useEffect(callback, dependencies) lets you control when the side-effect runs. When dependencies are:

A) Not provided: the side-effect runs after every rendering.

B) An empty array []: the side-effect runs once after the initial rendering.

C) Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs only when any depenendecy value changes.



#NodeMon
En root instalar
npm i -D nodemon concurrently

Agregar al package json

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node backend/server",
    "server": "nodemon backend/server",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\"" 
  },

npm run dev

