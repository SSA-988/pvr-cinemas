import React, { useState } from "react";
import DatePicker from "react-horizontal-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import "./ShowTime.css";
import moment from "moment";
function ShowTime() {
  const {image} = useParams();
  const {id} = useParams();
  let navigate = useNavigate();
  const [isActive, setActive] = useState(false);
  const [select, setSelect] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [time,setTime] = useState('');
  const [mall,setMall] = useState('');
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);
  const [select5, setSelect5] = useState(false);
  const onClick = () => {
    setActive(!isActive);
    setMall("PVR Orion UPTOWN,OLD Madras Road, Bengaluru");
  };
  const Select = () => {
    setSelect(!select);
    setMall("PVR MSR Elements Mall Bengaluru");
  };
  const Selected = () => {
    setSelect2(!select2);
    setMall("PVR Vaishnavi Sapphire Bengaluru");
  };
  const pressed = () => {
    setSelect3(!select3);
    setMall(" PVR Phoenix Marketcity Whitefield Road Bengaluru");
  };
  const Clicked = () => {
    setSelect4(!select4);
    setMall("PVR, Forum Mall, Koramangala");
  };
  const Present = () => {
    setSelect5(!select5);
    setMall("PVR Arena Bengaluru");
  };
  console.log("you chose this time: ❤️❤️",time);
   const selectedDay = (val) => {
     console.log(val);
   };
   const today = new Date();

   // to return the date number(1-31) for the specified date
   console.log("today => ", today);

   let tomorrow = new Date();
   tomorrow.setDate(today.getDate() + 1);
   //returns the tomorrow date
   console.log("tomorrow => ", tomorrow);
  return (
    <div className="showtime">
      <h3>SHOWTIMES</h3>
     
      <div className="showtime_malls">
        <h3 onClick={onClick}>PVR Orion UPTOWN,OLD Madras Road, Bengaluru</h3>
        {isActive ? (
          <>
            <h4>ENGLISH-2D</h4>
            <div className="showtime_timings">
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  11.40 AM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  1.40 PM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <h3 onClick={Select}>PVR MSR Elements Mall Bengaluru</h3>
        {select ? (
          <>
            <h4>ENGLISH-2D</h4>
            <div className="showtime_timings">
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  10.40 AM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  1.40 PM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  4.40 AM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <h3 onClick={Selected}>PVR Vaishnavi Sapphire Bengaluru</h3>
        {select2 ? (
          <>
            <h4>ENGLISH-2D</h4>
            <div className="showtime_timings">
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  11.40 AM
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  1.40 PM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  4.40 PM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <h3 onClick={pressed}>
          PVR Phoenix Marketcity Whitefield Road Bengaluru
        </h3>
        {select3 ? (
          <>
            <h4>ENGLISH-2D</h4>
            <div className="showtime_timings">
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  11.40 AM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  1.40 PM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  3.40 PM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  6.40 PM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <h3 onClick={Clicked}>PVR, Forum Mall, Koramangala</h3>
        {select4 ? (
          <>
            <h4>ENGLISH-2D</h4>
            <div className="showtime_timings">
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  10.40 PM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  1.40 PM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  5.30 PM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <h3 onClick={Present}>PVR Arena Bengaluru</h3>
        {select5 ? (
          <>
            <h4>ENGLISH-2D</h4>
            <div className="showtime_timings">
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  1.40 PM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  1.40 PM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  4.40 PM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  6.20 PM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
              <div class="showtime_dropdown">
                <h4 onClick={() => navigate(`/Theatre/${mall}/${image}/${id}`)}>
                  10.20 PM{" "}
                </h4>
                <div class="dropdown-content">
                  <a href="#">₹264 classic</a>
                  <a href="#">₹264 prime</a>
                  <a href="#">₹478 recliner</a>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ShowTime;
