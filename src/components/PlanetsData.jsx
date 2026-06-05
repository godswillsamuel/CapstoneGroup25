import { useEffect, useState } from "react";
import "./PlanetsData.css";

function PlanetsData() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((res) => res.json())
      .then((data) => setPlanets(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="planet-data" className="container">
     

      <div className="grid">
        {planets.map((planet, index) => (
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

export default PlanetsData;