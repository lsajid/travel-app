import axios from "axios";
import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;

function DisplayAllPlaces() {
  const [ places, setPlaces ] = useState([]);

  useEffect(()=> {
    console.log(`Trigger`);
    axios.get(`${API}/places`)
      .then((res) => {
        console.log(res);
      })
  }, [])

  return <div>Display All Places</div>;
}

export default DisplayAllPlaces;