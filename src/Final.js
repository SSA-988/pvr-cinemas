import React from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import "./Final.css";

function Final() {
    const {id,image,selected,total,name} = useParams();
     const str = selected;
     const count = str.split(",");
     const number = count.length;
  return (
    <div className="final">
      <div
        className="final_image"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${image}")`,
          backgroundPosition: "center center",
          objectFit: "contain",
        }}
      ></div>
      <h4>{name}</h4>
      <h5>English 2D</h5>
      <div className="final_parts">
        <div className="final_part">
          <h4>AUDI</h4>
          <h4>2</h4>
        </div>
        <div className="final_part">
          <h4>TICKETS</h4>
          <h4>{number}</h4>
        </div>
        <div className="final_part">
          <h4>SEAT</h4>
          <h4>{selected}</h4>
        </div>
      </div>
      <hr />
      <div className="final_footer">
        <div className="final_top">
          <div className="final_venue">
            <h5>Venue Details</h5>
            <h5>{id.length > 35 ? id.substring(0, 35) + "..." : id}</h5>
          </div>
          <div className="final_partDown">
            <div className="final_payment">
              <h5>Payment type</h5>
              <h5>CREDIT CARD</h5>
            </div>
            <div className="final_number">
              <h5>Confirmation</h5>
              <h5>#1455972</h5>
            </div>
          </div>
        </div>
        <div>
          <QRCode size={80} value={name} />
        </div>
      </div>
      <hr />
      <div className="final_bottom">
        <h3>{"Total amount paid"}</h3>
        <h3>₹{total}</h3>
      </div>
    </div>
  );
}

export default Final;
