import { useQuery } from "react-query";
import React from "react";
import newRequest from "../../utils/newRequest";
import "./Review.scss";
import { ButtonLoading } from "../Loading/Loading";
const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery(
    {
      queryKey: [review.userId],
      queryFn: () =>
        newRequest.get(`/users/${review.userId}`).then((res) => {
          return res.data;
        }),
    },
  );


  return (
    <div className="review">
      {isLoading ? (
        <ButtonLoading/>
      )  : error ? (
        error.response ? (
          <div>Error: {error.response.data.message}</div>
        ) : (
          <div>Error: {error.message}</div>
        )
      ): (
        <div className="user">
          <img className="pp" src={data.img || "/images/noprofile.png"} alt="" />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/images/star.png" alt="" key={i} />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/images/like.png" alt="" />
        <span>Yes</span>
        <img src="/images/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;
