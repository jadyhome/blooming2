import React from "react";
import "../styles/Global.css";
import BeigeNav from "../components/BeigeNav";
import BeigeFooter from "../components/BeigeFooter";

const BlogPage = () => {
  return (
    <div className="blogpage">
      <BeigeNav />

      <BeigeFooter />
    </div>
  );
};

export default BlogPage;
