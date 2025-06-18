import { Outlet } from "react-router-dom"
import Navbar from "../SharedCompo/Navbar/Navbar"
import Footer from "../SharedCompo/Footers/Footer"


const Root = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
<Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
    </div>
  )
}

export default Root