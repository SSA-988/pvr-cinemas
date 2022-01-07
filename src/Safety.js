import React from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import MasksRoundedIcon from "@mui/icons-material/MasksRounded";
import SanitizerRoundedIcon from "@mui/icons-material/SanitizerRounded";
import ThermostatRoundedIcon from "@mui/icons-material/ThermostatRounded";
import SocialDistanceRoundedIcon from "@mui/icons-material/SocialDistanceRounded";

import "./Safety.css";
function Safety() {
  return (
    <div className="safety">
      <div className="safety_top">
        <VerifiedUserIcon className="safety_icon" />
        <h3 className="safety_head">your safety is our top priority</h3>
      </div>
       <div className="safety_boxes">
        <div className="safety_box">
          <MasksRoundedIcon className="safety_mask" />
          <h3>use of masks</h3>
        </div> 

        <div className="safety_box">
          <SanitizerRoundedIcon className="safety_mask" />
          <h3>sanitize yourself</h3>
        </div>

       <div className="safety_box">
          <SocialDistanceRoundedIcon className="safety_mask" />
          <h3>social distancing</h3>
        </div>

         <div className="safety_box">
          <ThermostatRoundedIcon className="safety_mask" />
          <h3>body checks</h3>
        </div>  
      </div> 
    </div>
  );
}

export default Safety;
