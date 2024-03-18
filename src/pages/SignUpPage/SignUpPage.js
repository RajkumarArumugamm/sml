import React, { useState } from "react";
import ContactInformationComponent from './ContactInformation/ContactInformation';
import AboutYouComponent from './AboutYou/AboutYou';
import WelcomeComponent from './Welcome/Welcome';

function SignUpPage() {
  const [currentComponent, setCurrentComponent] = useState("contact");

  const handleContactInformationClick = () => {
    setCurrentComponent("about");
  };

  const handleAboutYouClick = () => {
    setCurrentComponent("welcome");
  };
  
  
return (
    <div>
      {currentComponent === "contact" && (
        <ContactInformationComponent onContactInformationClick={handleContactInformationClick} />
      )}
      {currentComponent === "about" && (
        <AboutYouComponent onAboutClick={handleAboutYouClick}  />
      )}
      {currentComponent === "welcome" && (
        <WelcomeComponent   />
      )}
    </div>
  );
}

export default SignUpPage;
