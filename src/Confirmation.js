import React from 'react'
import "./Confirmation.css"
import { useNavigate, useParams } from 'react-router-dom';

function Confirmation() {
    const navigate = useNavigate()
    const {name,selected,id,price,image} = useParams();
    const str = selected;
    const count = str.split(',');
    const number = count.length;
    const value = Number(price);
    const gov = 37;
    const gst = 9;
    const total = gov + gst + value;
    return (
      <>
        <div className="confirmation">
          <div className="confirmation_part">
            <h2 className="confirmation_title">
              {name} <spam> {"AUDI 2"}</spam>
            </h2>
            <div className="confirmation_value">
              <h2 className="confirmation_name">{id}</h2>
            </div>

            <h4 className="confirmation_time">ON 01-JAN-03:35 PM</h4>
            <hr />
            <h3 className="confirmation_seat">SEAT INFO</h3>
            <div className="conirmation_seats">
              <h3>{selected}</h3>
            </div>
            <div className="conirmation_price">
              <div className="conirmation_prices">
                <div className="confirmation_tickets">
                  <h4>Tickets</h4>
                  <h4 className="confirmation_count">{number}</h4>
                </div>
                <h4>INR {price}</h4>
              </div>
              <div className="conirmation_prices">
                <h4>Conv.Fees</h4>
                <h4>INR {gov}</h4>
              </div>
              <div className="conirmation_prices">
                <h4>GST</h4>
                <h4>INR {gst}</h4>
              </div>
              <div className="conirmation_prices">
                <h4>State GST Number</h4>
                <h4>29AAACP4526D1M</h4>
              </div>
            </div>
            <div className="conirmation_total">
              <h1>Total (INR)</h1>
              <h1>{total}</h1>
            </div>
          </div>
        </div>

        <div onClick={() =>navigate(`/Final/${id}/${image}/${selected}/${total}/${name}`)} className="confirmation_payment">
          <h3>Confirm and pay</h3>
        </div>
      </>
    );
}

export default Confirmation
