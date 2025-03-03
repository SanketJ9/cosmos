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

    // https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=vrKMI1bKEiQPIK9AXdGhbsqVLEbLAgU62bDfKqdq

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