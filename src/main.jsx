//NAO MEXER NESSE ARQUIVO 

import React from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Carte from './pages/Carte.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Apropos from './pages/Apropos.jsx';
import App from './App.jsx'
import './index.css';


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {path:'/', element: <Carte/>},
      {path:'Carte', element: <Services/>},
      {path:'Contact', element: <Contact/> },
      {path:'Apropos', element: <Apropos/>}
    ]
  }
]);


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);










//Este é o ponto de entrada do seu aplicativo React. Ele é responsável por renderizar o componente App na raiz do HTML.
//Geralmente, este arquivo não é muito modificado, exceto para importar bibliotecas, configurar roteamento, 
//ou configurar o estado global da aplicação.
