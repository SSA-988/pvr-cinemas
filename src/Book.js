import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./Book.css";
import Safety from "./Safety";
import ShowTime from "./ShowTime";
function Book() {
  const { id, image, date, overview } = useParams();
  return (
    <div className="book">
      <Header />
      <div className="book_contents">
        <div
          className="book_image"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${image}")`,
            backgroundPosition: "center center",
          }}
        >
          <h2 className="book_name">
            {id.length > 40 ? id.substr(0,40) + ".." : id} {"U/A"}
          </h2>
          <div className="banner_side">
            <FavoriteBorderOutlinedIcon className="banner_icon" />
          </div>
          <h2 className="date">
            {date === "undefined" ? "Webseries💕" : date}
          </h2>
          <h4 className="banner_overview">
            {overview.length > 140 ? overview.substr(0, 130) + "..." : overview}
          </h4>
        </div>
        <div className="banner_right">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgM3_d7_UxbukUqc7is5HbYPyja2OZnjrgy8f6hJEy13PxUnHraOtX1QOJswcJ4PP9-4&usqp=CAU"
            alt=""
          />
          {/* <h2>Enjoy your best Experience at PVR</h2> */}
          <img
            className="banner_image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCgkQaIeh92QFIZn_gTfPiaaMQ9l-4ZzSvuRIIjODJYCRcNPuEILcNU9gfEBvArooC7Y&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <Safety/>
      <ShowTime/>
    </div>
  );
}

export default Book;
