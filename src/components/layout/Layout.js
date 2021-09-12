import NavBar from "./NavBar";
import { useEffect } from 'react'

function Layout(props) {
  useEffect(() => {
    localStorage.setItem("codigo", "")
    localStorage.setItem("salida", "")
  },[])
  
  return (
    <div>
      <NavBar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
