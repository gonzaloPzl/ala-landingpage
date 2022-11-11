import { Outlet } from "react-router-dom";
import Logo from "./static/logo_ala_solid.png"

export default function Layout(){
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark ">
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Values</a>
            </li>
            <li>
              <a className="brand" href="/">
                <img src={Logo} alt="logo ala"  width="60px"/>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Universities</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Events</a>
            </li>

          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
    
  )
}