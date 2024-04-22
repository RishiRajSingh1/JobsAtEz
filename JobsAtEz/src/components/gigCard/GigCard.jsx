import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import newRequest from "../../utils/newRequest";
import { Button } from "@/components/ui/button"
import { ButtonLoading } from "../Loading/Loading";


const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  const generateStars = () => {
    const stars = [];
    const starRating = Math.round(item.totalStars / item.starNumber);

    for (let i = 0; i < 5; i++) {
      if (i < starRating) {
        stars.push(<img key={i} src="./images/star.png" alt="Filled Star" />);
      } else {
        stars.push(<img key={i} src="./images/starempty.png" alt="Empty Star"/>);
      }
    }

    return stars;
  };

  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="giginfo">
          {isLoading ? (
            <ButtonLoading />
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">
              <img src={data.img || "/images/noprofile.png"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.title}</p>
          <div className="star">
            {generateStars()}
          </div>
          <div className="price">
            <h2>STARTING FROM :</h2>
            <h2>₹ {item.price}</h2>
          </div>
        </div>
        <div className="detail">
          <Button>BOOK NOW</Button>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
