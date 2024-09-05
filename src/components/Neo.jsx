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
                            <p>Explore the Asteroids Nearing Our Planet</p>
                        </div>
                    </div>
                </div>
              </>
             )}
        </div>
  )
}

export default Neo