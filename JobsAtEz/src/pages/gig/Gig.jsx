import React from "react";
import "./Gig.scss";
// import { Slider } from "infinite-react-carousel/lib";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ButtonLoading } from "../../components/Loading/Loading";
import ErrorAlert from "../ErrorAlert/ErrorAlert";

function Gig() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  const renderStars = (rating) => {
    const filledStars = Math.round(rating);
    const emptyStars = 5 - filledStars;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<img src="/images/star.png" alt="Filled Star" key={i} />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img src="/images/starempty.png" alt="Empty Star" key={filledStars + i} />);
    }

    return stars;
  };

  return (
    <div className="gig">
      {isLoading ? (
        <ButtonLoading/>
      ) : error ? (
        <ErrorAlert error={error}/>
      ) : (
        <div className="box">
          <div className="left">
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              <ButtonLoading/>
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="user">
                <img
                  className="pp"
                  src={dataUser.img || "/images/noprofile.jpg"}
                  alt=""
                />
                <span>{dataUser.username}</span>
                <div className="stars">
                  {renderStars(data.totalStars / data.starNumber)}
                  <span>{Math.round(data.totalStars / data.starNumber)}</span>
                </div>
              </div>
            )}
            <Carousel >
              <CarouselContent>
                {data.images.map((img, index) => (
                  <CarouselItem className="carousel" key={index}>
                    <img src={img} alt="" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            {isLoadingUser ? (
              <ButtonLoading/>
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img src={dataUser.img || "/images/noprofile.jpg"} alt="" />
                  <div className="info">
                    <span>{dataUser.username}</span>
                    <div className="stars">
                      {renderStars(data.totalStars / data.starNumber)}
                      <span>{Math.round(data.totalStars / data.starNumber)}</span>
                    </div>
                    <button>Contact Me</button>
                  </div>
                </div>
                <div className="box1">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{dataUser.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">{dataUser.createdAt.split("T")[0]}</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />
                  <p>{dataUser.desc}</p>
                </div>
              </div>
            )}
            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>₹ {data.price}</h2>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/images/clock.png" alt="" />
                <span>{data.deliveryTime} Days Delivery</span>
              </div>
              <div className="item">
                <img src="/images/recycle.png" alt="" />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              <label>Features</label>
              {data.features.map((feature, index) => (
                <div className="item" key={index}>
                  <img src="/images/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay/${id}`}>
              <button>Continue</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;
