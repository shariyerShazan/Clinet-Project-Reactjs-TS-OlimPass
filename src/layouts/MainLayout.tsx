import { Outlet } from "react-router"
import Navbar from "../components/common/Navbar"


const MainLayout = () => {
  return (
     <div className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-30 lg:pt-32 xl:pt-34">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout