//NAO MEXER NESSE ARQUIVO 

import React from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Carte from './pages/Carte.jsx';
import Contact from './pages/Contact.jsx';
import App from './App.jsx'
import './index.css';


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {path:'/', element: <Home/>},
      {path:'Carte', element: <Carte/>},
      {path:'Contact', element: <Contact /> }
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
