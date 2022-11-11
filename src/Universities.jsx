import uColumbia from "./static/university-columbia.png"
import Location from "./static/location.svg"
import "./styles/Universities.css";

export default function Universities() {
  return(
  <>
    <div className="justify-content-center d-flex my-3">
      <div className="container-fluid container-lg row">
        
        <h4 className="my-1">Universities</h4>
        <p>Instead he came to the conclusion that space and time are not discovered by humans to be objective features of the world, but imposed by us as part of a framework for organizing experience.</p>

      </div>

    </div>

    <div className="justify-content-center d-flex">
      <div className="container-fluid container-lg row">
        <img src={uColumbia} className="img-fluid" alt=" imagen Universidad de columbia" />
        <h4 className="my-2">University of Columbia</h4>
        <p className="d-flex align-items-center ">
          <img src={Location} className="icon--location" alt="icono ubicacións" width="15em"/> Manhattan, New York
        </p>
      </div>
    </div>

  </>
  )
}