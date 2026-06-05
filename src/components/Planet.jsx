import planetsData from "./Planet.json";
import "./Planet.css";

function Planet() {
  return (
    <div id="planet-data" className="container">
      <div className="grid">
        {planetsData.map((planet, index) => (
          <div className="card" key={index}>
            <img src={planet.image} alt={planet.planet} />
            <h2>{planet.planet}</h2>
            <p>{planet.distanceFromSun} million km</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Planet;