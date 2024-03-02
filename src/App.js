import React, { useState, useEffect } from "react";
import axios from "axios";

const GeolocationTracing = () => {
  const [location, setLocation] = useState(null);
  const [longi, setlongi] = useState(null);
  const [longit, setlongit] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const successHandler = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
      const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
      console.log(`https://www.google.com/maps?q=${latitude},${longitude}`);
    };

    const errorHandler = (err) => {
      setError(err.message);
    };

    // Check if geolocation is supported
    if ("geolocation" in navigator) {
      // Get the current position
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    } else {
      setError("Geolocation is not supported in this browser");
    }

    const ffffff = async (position) => {
      await axios.get(" http://localhost:3003/").then((res) => {
        console.log(res.data);
      }); //
    };
    ffffff();
  }, []);

  const ffff = (position) => {
    window.open(
      `https://www.google.com/maps?q=${location.latitude},${location.longitude}`
    );
  };
  const fffff = async (position) => {
    await axios
      .post(" http://localhost:3003/", {
        moviename: 2,
        writtenby: 1,
      })
      .then((res) => {
        console.log(res.data.moviename);
        console.log(res);
      }); //
  };

  return (
    <div>
      {location ? (
        <div>
          <h2>Your current location:</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Loading...</p>
      )}
      <>
        <button onClick={ffff}>vk</button>
      </>
      <>
        <button onClick={fffff}>vk</button>
      </>
    </div>
  );
};

export default GeolocationTracing;
