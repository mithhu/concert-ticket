import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202844.37669293588!2d-122.18118304312242!3d37.40299366608708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon+Valley%2C+CA%2C+USA!5e0!3m2!1sen!2sbd!4v1548274837307"
        width="100%"
        height="500px"
        frameborder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>location</div>
      </div>
    </div>
  );
};

export default Location;
