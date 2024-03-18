import React from "react";
import '../../../styles/Fonts.scss'
import '../../../styles/HTMLControls.scss'

const TwoColumnContainer = ({ children }) => {
  return (
    <div className="two-column-container">
      {children}
    </div>
  );
};

export default TwoColumnContainer;
