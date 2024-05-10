import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import newRequest from "../../utils/newRequest";
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "../Loading/Loading";
import * as React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function GigCard({ item }) {
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
      stars.push(
        <img
          key={i}
          src={i < starRating ? "./images/star.png" : "./images/starempty.png"}
          alt={i < starRating ? "Filled Star" : "Empty Star"}
          className="w-4 h-4"
        />
      );
    }

    return stars;
  };

  return (
    <Link to={`/gig/${item._id}`} className="link">
      <CardContainer className="flex flex-wrap">
        <CardBody className="group card hover:shadow-2xl hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-auto sm:w-[30rem] h-auto w-[20%] rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white giginfo"
          >
            {isLoading ? (
              <ButtonLoading />
            ) : error ? (
              "Something went wrong!"
            ) : (
              <div className="user flex items-center gap-4">
                <img
                  src={data.img || "/images/noprofile.png"}
                  alt=""
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span>{data.username}</span>
              </div>
            )}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-xl font-bold text-neutral-600 dark:text-white giginfo"
          >
            {item.title}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={item.cover}
              className="h-60 w-full object-cover rounded-xl group-hover:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            <CardItem>
              <div className="flex items-center gap-2">{generateStars()}</div>
            </CardItem>
            <CardItem>
              <div className="flex items-center">
                <h2 className="text-neutral-600 dark:text-white">STARTING FROM :</h2>
                <h2 className="ml-1 text-2xl font-bold text-amber-400 dark:text-amber-400">
                  ₹ {item.price}
                </h2>
              </div>
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-sky-700 dark:bg-sky-700 dark:text-white text-white text-xs font-bold"
            >
              Buy Now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </Link>
  );
}
