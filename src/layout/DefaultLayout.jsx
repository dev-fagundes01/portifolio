import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import Header from '../components/Header/Header'

function DefaultLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}
export default DefaultLayout
