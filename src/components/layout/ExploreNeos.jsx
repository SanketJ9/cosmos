import axios from "axios"
import React, { useState, useEffect } from "react";
import "./Neo.css"
import "./stars.css"
import Slider from "react-slick";
import Neocard from "./Neocard";
import Button from "../ui/Button";

const ExploreNeos = () => {

    const [neo, setNeo] = useState()
    const [loading, setLoading] = useState(false);

    var sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2000,
    draggable: true,
    autoplay: true,
    autoplayspeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,        }
      },
      {
        breakpoint: 480,
        settings: { 
          slidesToShow: 2,
        }
      }
    ]
    };

    useEffect(() => {
        setLoading(true);
        axios.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=vrKMI1bKEiQPIK9AXdGhbsqVLEbLAgU62bDfKqdq").then((response) => {
        setNeo(response.data);
        setLoading(false)
        });
    }, []);

    console.log(neo)

    if (!neo) return null;

  return (
    <div className="Neo py-20">
        <div className="container">

            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className=" grid grid-cols-3 gap-3 z-10 py-12 mx-auto">
                    {neo.near_earth_objects.map((neos) => (
                        <Neocard neo={neos} />
                    ))}
                </div>
             )}
        </div>
    </div>
  )
}

export default ExploreNeos