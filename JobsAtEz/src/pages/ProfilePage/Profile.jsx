import "./Profile.scss";
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const seller = false;
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      try {
        const userData = localStorage.getItem("currentUser");
        const parsedData = JSON.parse(userData);
        setData(parsedData);
        console.log(parsedData);
      } catch (error) {
        console.error("Error fetching gig data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="profile">
        <div className="left">
          <p>Profile Picture</p>
          <img src={data.img} alt="" />
        </div>
        <div className="right">
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
            </tbody>
          </table>
          {seller ? (
            <h1>Profile Status: You Are A Seller</h1>
          ) : (
            <div>
              <h1>Profile Status: You Are A Buyer</h1>
              <button>Become a Seller</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
