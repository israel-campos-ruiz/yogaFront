import React, {useEffect} from "react";
import About from "../components/dashboard/About";
import Banner from "../components/dashboard/Banner";
import Programs from "../components/dashboard/Programs";
import { resetScroll } from "../helpers/resetScroll";

const Dashboard = () => {
  useEffect(() => {
    resetScroll()
  }, [])
  return (
    <>
      <Banner />
      <Programs />
      <About/>
    </>
  );
};

export default Dashboard;
