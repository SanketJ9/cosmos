import axios from "axios"
import React, { useState ,useEffect,useMemo } from "react";
import "./Banner.css"
// import requests from './Requests';


const Banner = () => {

    const [apod, setApod] = useState()
    const [loading, setLoading] = useState(false);
    const [readmore, setReadmore] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            "https://api.nasa.gov/planetary/apod?api_key=vrKMI1bKEiQPIK9AXdGhbsqVLEbLAgU62bDfKqdq"
          );
          setApod(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
        setLoading(false);
      };
  
      fetchData();
    }, []);

    const toggleReadMore = () => { 
      setReadmore(!readmore);
    }

    // Memoize the APOD data to prevent unnecessary recalculations
    const memoizedApod = useMemo(() => apod, [apod]);

    if (!memoizedApod) return null;

    return (
        <div className="Banner">
            {loading ? (
                <div>Loading...</div>
            ) : (
              <>
                <div className="apod-cont">
                    <img className="apod-bg" src={memoizedApod.url} alt="" />
                </div>
                <div className="overlay"></div>
                <div className="container">
                  <div className="content">
                    <div className="info-cont">
                      <div className="heading pb-2">
                        <p className="text-2xl leading-none">Astronomy Picture of the Day</p>
                      </div>
                      <div className="title pb-4">
                        <p className="text-4xl">{memoizedApod.title}</p>
                      </div>
                      <div className="info max-h-[40vh]">
                        <p className="text-xl">{readmore? memoizedApod.explanation.substr(0, 200) : memoizedApod.explanation} <span onClick={toggleReadMore} className="cursor-pointer text-zinc-50">{readmore? "...More" : "Less"}</span></p>
                      </div>
                    </div>
                    <div className="image-cont">
                      <img src={memoizedApod.url} alt="" />
                    </div>
                  </div>
                </div>
              </>
             )}
        </div>
    )
}

export default Banner