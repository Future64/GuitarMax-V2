import React from "react";
import Guitar from "../../Components/Guitar/Guitar.js";
import "./MainPage.scss";
import Header from "../../Components/Header/Header.js";
import CustomNav from "../../Components/CustomNav/CustomNav.js";

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <CustomNav
        li={[
          ["Dashboard", "img/dashboard.svg"],
          ["Restautant’s", "img/restaurant.svg"],
          ["Manage User’s", "img/manage-user.svg"],
          ["Manage Order’s", "img/manage-order.svg"],
          ["Manage Coupon’s", "img/manage-coupon.svg"],
        ]}
      />
      {/* <Guitar /> */}
    </div>
  );
};

export default MainPage;
