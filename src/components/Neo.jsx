import axios from "axios"
import React, { useState } from "react";
import "./Neo.css"

const Neo = () => {

    const [neo, setNeo] = useState()
    const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        setLoading(true);
        axios.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=vrKMI1bKEiQPIK9AXdGhbsqVLEbLAgU62bDfKqdq").then((response) => {
        setNeo(response.data);
        setLoading(false)
        });
    }, []);

    console.log(neo)

    if (!neo) return null;

  return (
    <div className="Neo">
            {loading ? (
                <div>Loading...</div>
            ) : (
              <>
                <div className="neo-cont">
                    <div className="container">
                        <div className="heading">
                            <p>Journey of Space Wanderers</p>
                        </div>
                        <div className="description">
                          <p>Follow the journeys of celestial wanderers as they traverse the cosmos near our planet. Explore detailed data and insights into these fascinating objects.</p>
                        </div>

                        <div className="neo-cards">
                          {neo.near_earth_objects.map((neos,neoIndex) => (
                            <div className="neo-card" key={neoIndex}>
                              <div className="name">
                                <p>{neos.name}</p>
                              </div>
                              <div className="neo-size">
                                <p>Diameter: {Math.floor(neos.estimated_diameter.kilometers.estimated_diameter_min)} To {Math.floor(neos.estimated_diameter.kilometers.estimated_diameter_max)} KM</p>
                              </div>
                            </div>
                          ))}
                          
                        </div>
                    </div>
                </div>
              </>
             )}
        </div>
  )
}

export default Neo