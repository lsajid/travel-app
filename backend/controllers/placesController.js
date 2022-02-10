const express = require("express");
const places = express.Router();
const { getAllPlaces } = require("../queries/placesQueries.js");

places.get("/", async (req, res) => {
    try{
        const allPlaces = await getAllPlaces();
        if(allPlaces[0]){
            res.status(200).json(allPlaces);
        }else{
            res.status(500).json({ error: "No data returned from db" })
        }
    }catch(err){
        console.log(err);       
    }
})

module.exports = places;