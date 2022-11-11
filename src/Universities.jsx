// Import de imagenes de universidades
import uColumbia from "./static/university-columbia.png"
import uCIT from "./static/university-CIT.png"
import uCornell from "./static/university-cornell.png"
import uPennsylvania from "./static/university-pennsylvania.png"
// import del icono de ubicación
import Location from "./static/location.svg"
// imprt del estilo
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
        
        <div className="col-md-6">
          <img src={uColumbia} className="img-fluid" alt=" imagen Universidad de columbia" />
          <h4 className="my-2">University of Columbia</h4>
          <p className="d-flex align-items-center ">
            <img src={Location} className="icon--location" alt="icono ubicacións" width="15em"/> Manhattan, New York
          </p>
        </div>

        <div className="col-md-6">
          <img src={uCIT} className="img-fluid" alt=" imagen Universidad de columbia" />
          <h4 className="my-2">California Institute of Technology</h4>
          <p className="d-flex align-items-center ">
            <img src={Location} className="icon--location" alt="icono ubicacións" width="15em"/> Pasadena, California
          </p>
        </div>

        <div className="col-md-6">
          <img src={uCornell} className="img-fluid" alt=" imagen Universidad de columbia" />
          <h4 className="my-2">Cornell University</h4>
          <p className="d-flex align-items-center ">
            <img src={Location} className="icon--location" alt="icono ubicacións" width="15em"/> Ithaca, New York
          </p>
        </div>

        <div className="col-md-6">
          <img src={uPennsylvania} className="img-fluid" alt=" imagen Universidad de columbia" />
          <h4 className="my-2">University of Pennsylvania</h4>
          <p className="d-flex align-items-center ">
            <img src={Location} className="icon--location" alt="icono ubicacións" width="15em"/> Philadelphia, Pennsylvania
          </p>
        </div>
      </div>
    </div>

  </>
  )
}