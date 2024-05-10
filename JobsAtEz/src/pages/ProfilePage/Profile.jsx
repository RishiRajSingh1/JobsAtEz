import "./Profile.scss";
import React, { useEffect, useState } from 'react';
import {Button} from "@/components/ui/button"


const Profile = () => {
  const seller = false;
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      try {
        const userData = localStorage.getItem("currentUser");
        const parsedData = JSON.parse(userData);
        setData(parsedData);
      } catch (error) {
        console.error("Error fetching gig data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="profile">
        <div className="right">
        <div className="left">
          <p>Profile Picture</p>
          <img src={data.img} alt="./images/noprofile.png" />
        </div>
          <h1>Profile Information</h1>
          <table>
            <tbody>
              <tr>
                <td>Username:</td>
                <td>{data.username}</td> 
              </tr>
              <tr>
                <td>Email:</td>
                <td>{data.email}</td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>{data.desc}</td> 
              </tr>
              <tr>
                <td>Created At:</td>
                <td>{data.createdAt ? data.createdAt.split("T")[0] : "N/A"}</td>

              </tr>
              <tr>
                <td>Last Updated At:</td>
                <td>{data.updatedAt ? data.updatedAt.split("T")[0] : "N/A"}</td>
              </tr>
              <tr>
                <td>Profile Status:</td>
                <td>{data.isSeller ? "Seller" : "Buyer"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Profile;
