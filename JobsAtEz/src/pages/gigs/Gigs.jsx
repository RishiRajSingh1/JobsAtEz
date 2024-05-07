
import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import { ComboboxDemo } from "../../components/Combobox/Combobox";
import { ButtonLoading } from "../../components/Loading/Loading";
import { Input } from "@/components/ui/input"


function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();
  const category = search.split("=")[1];

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () => {
      let apiUrl = "/gigs";
      if (category) {
        apiUrl += `?search=${category}`;
      } else {
        apiUrl += `?search=${searchBoxValue}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`;
      }
      return newRequest.get(apiUrl).then((res) => res.data);
    },
  });

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const navigate=useNavigate();
  const resetFilters = () => {
    setSearchBoxValue("");
    minRef.current.value = "";
    maxRef.current.value = "";
    setSort("sales");
    navigate("/gigs");
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [sort, searchBoxValue]); // Refetch when sort or searchBoxValue changes

  const apply = () => {
    refetch();
  };

  return (
    <div className="gigs">
      <div className="box">
        <div className="header">
          <h1>Get The Best Out Of Best</h1>
        </div>
        <p>Hire the best freelancer for your project, across the globe.</p>
        <div className="menu">
          <div className="left1">
            <span>Budget</span>
            <Input ref={minRef} type="number" placeholder="min" />
            <Input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right1">
            <button onClick={resetFilters}>Show All Gigs</button>
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="/images/dropdown.png"
              alt=""
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("totalStars")}>Best Selling</span>
                )}
                <span onClick={() => reSort("totalStars")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <span>Search</span>
        <Input
          className="searchBox"
          type="text"
          value={searchBoxValue}
          placeholder="Search for Gigs"
          onChange={(e) => setSearchBoxValue(e.target.value)}
        />
        <div className="cards">
          {isLoading
            ? <ButtonLoading/>
            : error
            ? "Something went wrong!"
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
}

export default Gigs;