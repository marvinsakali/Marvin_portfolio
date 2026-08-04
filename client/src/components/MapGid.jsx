import { useState } from "react";

const MapGrid = () => {

  const GRID_SIZE = 150;

  const [coords, setCoords] = useState({
    lat: -1.280,
    lon: 36.820,
  });


  const longitudes = [36, 37, 38, 39];
  const latitudes = [-1, -2, -3, -4];


  const handleMouseMove = (e) => {

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;


    const lon = 36 + x / GRID_SIZE;
    const lat = -1 - y / GRID_SIZE;


    setCoords({
      lon: lon.toFixed(3),
      lat: lat.toFixed(3),
    });
  };


  return (
    <div
      className="
        absolute
        inset-0
        opacity-40
      "
      onMouseMove={handleMouseMove}
    >

      {longitudes.map((lon, i)=>(
        <span
          key={lon}
          className="longitude"
          style={{
            left:`${(i+1)*GRID_SIZE}px`
          }}
        >
          {lon}°E
        </span>
      ))}


      {latitudes.map((lat,i)=>(
        <span
          key={lat}
          className="latitude"
          style={{
            top:`${(i+1)*GRID_SIZE}px`
          }}
        >
          {Math.abs(lat)}°S
        </span>
      ))}


      <div className="north-arrow">
        ↑
        <span>N</span>
      </div>


      <div className="scale-bar">
        <div />
        <span>100 km</span>
      </div>


      <div className="coordinates">
        LAT {coords.lat}°
        <br/>
        LON {coords.lon}°
      </div>

    </div>
  );
};

export default MapGrid;