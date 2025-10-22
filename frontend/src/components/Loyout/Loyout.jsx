import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"

const Loyout = () =>{
    return(
        <div className="container">
            <NavBar/>
            <Outlet/>
        </div>
    )
}
export default Loyout