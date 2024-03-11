import React, { useState } from "react";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleImageClick = (event) => {
    const newPosition = {
      x: event.clientX,
      y: event.clientY,
    };
    setPosition(newPosition);
  };

  return (
    <div
      onClick={handleImageClick}
      style={{ position: "relative", height: "100vh" }}
    >
      <img
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1vmeOq9gjx7wieSRNdkugDDIYZwJBFAdyA&usqp=CAU'}
        alt={"alt"}
        style={{
          height: "60px",
          width: "60px",
          cursor: "pointer",
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
          border: "1px solid gray",
          borderRadius: "50%",
          transition: "all 0.5s ease-in-out",
        }}
      />
    </div>
  );
};

export default App;
