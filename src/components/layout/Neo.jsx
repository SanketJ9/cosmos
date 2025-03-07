import axios from "axios"
import React, { useState, useEffect } from "react";
import "./Neo.css"
import "./stars.css"
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Neocard from "./Neocard";
import Button from "../ui/Button";

const Neo = () => {

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
            {loading ? (
                <div>Loading...</div>
            ) : (
              <>
                <div className="neo-cont z-10 mt-24">
                    <div className="container">
                        <div className="heading">
                            <p className="text-5xl pb-2">Journey of Space Wanderers</p>
                        </div>
                        <div className="description">
                          <p className="text-xl max-w-[720px]">Follow the journeys of celestial wanderers as they traverse the cosmos near our planet. Explore detailed data and insights into these fascinating objects.</p>
                        </div>
                        <Link to="/neos">
                          <Button extraClass="mt-8" cta="Explore NEOs" align="left"/>
                        </Link>
                    </div>
                </div>
                <div className="neo-cards z-10 py-12 px-4 mx-auto">
                  <Slider {...sliderSettings}>
                    {neo.near_earth_objects.map((neos) => (
                      <Neocard neo={neos} />
                    ))}
                  </Slider>
                </div>

                <div className="stars-cont">
                  <div id='stars'></div>
                  <div id='stars2'></div>
                  <div id='stars3'></div>
                </div>
                <div id="earth"></div>
              </>
             )}
        </div>
  )
}

export default Neo