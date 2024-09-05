import axios from "axios"
import React, { useState } from "react";
import "./Banner.css"
// import requests from './Requests';


const Banner = () => {

    const [apod, setApod] = useState()
    const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        setLoading(true);
        axios.get("https://api.nasa.gov/planetary/apod?api_key=vrKMI1bKEiQPIK9AXdGhbsqVLEbLAgU62bDfKqdq").then((response) => {
        setApod(response.data);
        setLoading(false)
        });
    }, []);

    console.log(apod)

    if (!apod) return null;
    return (
        <div className="Banner">
            {loading ? (
                <div>Loading...</div>
            ) : (
              <>
                <div className="apod-cont">
                    <img className="apod-bg" src={apod.url} alt="" />
                </div>
                <div className="overlay"></div>
                <div className="container">
                  <div className="content">
                    <div className="info-cont">
                      <div className="heading">
                        <p>Astronomy Picture of the Day</p>
                      </div>
                      <div className="title">
                        <p>{apod.title}</p>
                      </div>
                      <div className="info">
                        <p>{apod.explanation.substr(0, 300) + '...'}</p>
                      </div>
                    </div>
                    <div className="image-cont">
                      <img src={apod.url} alt="" />
                    </div>
                  </div>
                </div>
              </>
             )}
        </div>
    )
}

export default Banner