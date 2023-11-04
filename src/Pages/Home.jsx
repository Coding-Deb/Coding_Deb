import React from "react";
import { Carosal } from "../Components/Carosal";
import { Cards } from "../Components/Cards";
import { CommonFooter } from "../Components/CommonFooter";

export const Home = () => {
  const containerStyle = {
    background: "linear-gradient(45deg, #3494E6, #EC6EAD)",
    minHeight: "100vh",
    // display: "flex",
    
    // alignItems: "center",
    // padding:"25px",
    // marginTop:"40px"
  };
  return (
    <div style={containerStyle}>
      <Carosal/>
      <div className="d-flex p-lg-2 m-2 ">
        <h1 className="text-center fw-bold text-white">Our Trending Courses</h1>
      </div>
      <Cards/>
      <CommonFooter/>
    </div>
  );
};
