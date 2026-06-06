import React from "react";
import "./Table.css";



const Table = () => {
    return (
        <div className="table-section" >
            <div className="TableHead">
                <h2>Planetary Facts at a Glance</h2>
                 <p>Below is a comparative table of major planets in our solar system.The data highlights key physical <br />
                  properties used by astronomers and researchers worldwide
                </p>
            </div>

        <table className="TableMain">
        <caption>Data about the planets of our solar system (Planetary facts taken from Nasa)</caption>
        <thead className="TableCol">
            <tr>
                <th scope="col" colspan="2"></th>
                <th scope="col">Name</th>
                <th scope="col">Mass(10 24kg)</th>
                <th scope="col">Diameter(Km)</th>
                <th scope="col">Density(kg/m3)</th>
                <th scope="col">Gravity(m/s2)</th>
            </tr>
        </thead>
        <tbody className="TableData">
            <tr>
                <td scope="rowgroup" rowspan="4" colspan="2" className="ColGroup">Terrestrial planets</td>
                <td>mercury</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7 </td>
            </tr>
            <tr>
                <td scope="row">Venus</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7 </td>
            </tr>
            <tr>
                <td scope="row">Earth</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7 </td>
            </tr>
             <tr>
                <td scope="row">Mars</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7 </td>
            </tr>
            <tr>
                <td scope="rowgroup" rowspan="4" colspan="1" className="ColGroup">Jovian planets</td>
                <td scope="rowgroup" rowspan="2" colspan="1" className="ColGroup"> Gas Giants</td>
                <td scope="row">Jupiter</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>                           
            </tr>
            <tr>
                <td scope="row">Saturn</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>       
            </tr>
            <tr>
                <td scope="rowgroup" rowspan="2" colspan="1" className="ColGroup"> ice giants</td>
                <td scope="row">Uranus</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>                    
            </tr>
            <tr>
                <td scope="row">Neptune</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>                
            </tr>
        </tbody>
        <tfoot className="TableData">
             <tr>
                <td scope="rowgroup"rowspan="1" colspan="2" className="ColGroup"> Dwarf Planets</td>
                <td scope="row">Pluto</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>              
            </tr>
        </tfoot>
        </table>
    </div>
    );
};


export default Table;