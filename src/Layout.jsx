
import Footer from './component/footer/footer'
import {Outlet} from 'react-router-dom'
import Header from './component/Header/Header'



function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default  Layout