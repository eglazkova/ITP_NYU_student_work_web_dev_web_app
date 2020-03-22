import React, {useState} from "react";
import ReactMapGl from "react-map-gl"




export default function App() {
  const [viewport, setViewport] = useState({
latitude: 55.5761,
longitude: 39.5442,
width: "100vw",
height: "100vh",
zoom: 10

  });
    return (
    <div>
      <ReactMapGl
      {...viewport} 
      mapboxApiAccessToken={'pk.eyJ1IjoiZWdsYXprb3ZhIiwiYSI6ImNrODNma2plZTFhMjIzZnJ5aG5uYzA5NGMifQ.SaP79aXQWewS78pcoCHqzA'}
      mapStyle="mapbox://styles/eglazkova/ck83iy6nh2kjv1irunnilyrpp"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
    >
      markers here
      </ReactMapGl>
      </div>
    );
}

