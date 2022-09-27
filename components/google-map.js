import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="Dirección google map de coder Crack School"
        src="https://maps.google.com/maps?q=avenida%20de%20la%20albufera%2031&t=&z=15&ie=UTF8&iwloc=&output=embed"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
