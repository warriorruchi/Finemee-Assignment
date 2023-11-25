import React, { useEffect } from "react";
import Mine from "./Mine";
import Mineral from "./Mineral";
import Sustainablity from "./Sustainablity";
import Oilgas from "./Oilgas";
import AOS from "aos";

const Content = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <Mine />
      <Sustainablity />
      <Mineral />
      <Oilgas />
    </>
  );
};

export default Content;
