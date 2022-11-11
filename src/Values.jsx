import FlagIcon from "./static/flag.svg";
import GobernatIcon from "./static/gobernat.svg";
import VoteIcon from "./static/vote.svg";
import "./styles/Values.css";

export default function Values() {
  return (
    <div className="justify-content-center d-flex">
      <div className="container-fluid container-lg row text-center">
        <div className="col-md-4 p-4 my-4 border">
          <img className="m-4" src={FlagIcon} alt="Icono bandera" />
          <h4>Helping a local business </h4>
          <p>
          For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure.
          </p>
        </div>
        
        <div className="col-md-4 p-4 my-4 border">
          <img className="m-4" src={GobernatIcon} alt="Icono gobierno" />
          <h4>Lessons and insights from 8 years </h4>
          <p>
          In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic. According to Kant, knowledge about space is synthetic.        </p>
        </div>
        
        <div className="col-md-4 p-4 my-4 border">
          <img className="m-4" src={VoteIcon} alt="Icono voto" />
          <h4>How to build a loyal community </h4>
          <p>
          Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk) I mean we had Long lines of prisoners fist fighting to use them.
          </p>
        </div>
      </div>
    </div>
  )
}