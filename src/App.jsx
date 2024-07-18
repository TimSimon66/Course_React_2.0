
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
//npm start


const App = () => {


  return (
    <>

      <Header />

      <Outlet />
      <Footer />
    </>
  )
}

export default App
