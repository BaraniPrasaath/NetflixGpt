import React from "react";

const Body = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <img src={welcome_poster} alt="wallpaper" className="w-full h-full" />
      </div>
      <div>
        <h1>Welcome.. Home..!</h1>
      </div>
    </div>
  );
};

export default Body;
