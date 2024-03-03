import React, { useState, useEffect } from "react";
import axios from "axios";

const GeolocationTracing = () => {
  const [location, setLocation] = useState(null);
  const [longi, setlongi] = useState(56);
  const [longit, setlongit] = useState(0);
  const [error, setError] = useState(null);
  const [name, setname] = useState("");
  const [nametrue, setnametrue] = useState(true);

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
      await axios.get("https://backloco.onrender.com").then((res) => {
        setlongi(res.data[0].writtenby);
        setlongit(res.data[0].moviename);
        console.log(7);
        console.log(nametrue);
      }); //
    };
    ffffff();
  }, []);

  const ffffff = async (position) => {
    await axios.get(" https://backloco.onrender.com").then((res) => {
      setlongi(res.data[0].writtenby);
      setlongit(res.data[0].moviename);
      console.log(res.data[0].moviename);
      console.log(7);
      console.log(nametrue);
    }); //
  };
  // ffffff();

  ////
  //
  //
  //
  //
  //

  //

  //
  //
  //
  //
  const ffff = (position) => {
    if (location !== "") {
      const p = `https://www.google.com/maps?q=${longi},${longit}`;
      console.log(p);
      window.open(p);
    }
  };
  useEffect(() => {
    // ffffff();
    const intervalId = setInterval(ffffff, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [nametrue]);

  /////
  ////
  //
  //
  //
  //
  //

  //

  //
  //
  //
  //
  ///
  const fffff = async () => {
    setnametrue(!nametrue);
    // if (name === "Ranjith") {
    // const successHandler = (position) => {
    //   const { latitude, longitude } = position.coords;
    //   setLocation({ latitude, longitude });
    //   const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    //   console.log(`https://www.google.com/maps?q=${latitude},${longitude}`);
    // };

    // const errorHandler = (err) => {
    //   setError(err.message);
    // };

    // // Check if geolocation is supported
    // if ("geolocation" in navigator) {
    //   // Get the current position
    //   navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    // } else {
    //   setError("Geolocation is not supported in this browser");
    // }
    //
    //
    //
    //
    //
    //

    //

    //
    //
    //
    //
    await axios
      .put("https://backloco.onrender.com/65e312974969474a487aa28d", {
        moviename: location?.longitude,
        writtenby: location?.latitude,
      })
      .then((res) => {
        let latitude = res.data.moviename;
        let longitude = res.data.writtenby;
        // setLocation({ latitude, longitude });
        // console.log(res.data.moviename);
        // console.log(res.data);
        console.log(0);
      });
    setnametrue(!nametrue);
    console.log(!nametrue);
    //   } //
  }; //location.longitude, //location.latitude,
  //////
  ////
  //
  //
  //
  //
  //

  //

  //
  //
  //
  //
  useEffect(() => {
    // Execute the function initially
    if (name === "Ranjith") {
      console.log(name);
      console.log(nametrue);
      // Set up the interval to repeat every 30 seconds (30000 milliseconds)
      const intervalId = setInterval(fffff, 3000);

      // Clear the interval when the component is unmounted
      return () => clearInterval(intervalId);

      // Clear the interval when the component is unmounted
    }
  }, [name]);
  console.log(name);
  ////
  const posty = async (position) => {
    await axios
      .post("https://backloco.onrender.com", {
        moviename: location.latitude,
        writtenby: location.longitude,
      })
      .then((res) => {
        console.log(res.data.moviename);
        console.log(res);
      }); //
  };

  const fdel = async () => {
    await axios.delete("https://backloco.onrender.com").then((res) => {
      console.log(res.data.moviename);
      console.log(res);
    }); //
  };

  return (
    <div>
      {location ? (
        <div>
          {/* <h2>Your current location:</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p> */}
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Loading...</p>
      )}
      <>
        <>
          {" "}
          <button onClick={ffff}>find bus location</button>
        </>
      </>
      <input onChange={(e) => setname(e.target.value)} type="text" />

      <>
        {/* <button onClick={fffff}>update</button> */}
        {/* <button onClick={fdel}>del</button> */}
        {/* <button onClick={posty}>posty</button> */}
      </>
    </div>
  );
};

export default GeolocationTracing;
