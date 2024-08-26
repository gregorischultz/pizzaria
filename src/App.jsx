import Header from './componentes/Header';
import './App.css'
import { Outlet } from 'react-router-dom';


function App() {
   
  return (
    <>
     <Header/>
        <main>
          <Outlet/>
        </main>
    </>
  )
}

export default App








//componente principal do aplicativo, contem a estrutura basica
//como navegaçao, layourt geral e componente que compoem a agina
//Se você quiser adicionar novos componentes ou modificar a estrutura da aplicação, 
//você fará isso aqui.
