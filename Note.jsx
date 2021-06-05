import React from "react";

function Footer() {
  var curyr = new Date().getFullYear();

  return (
    <div className="note">
      <h1>Javascript and React.js </h1>
      <p>
        This was an amazing bootcamp taken by the Shaurya Sir. We covered a lot
        from scratch including Javascript and React js, HTML
      </p>
    </div>
  );
}

export default Footer;
