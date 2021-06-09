import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import PlantsPage from "../pages/PlantsPage";
import SuppliesPage from "../pages/SuppliesPage";
import MerchPage from "../pages/MerchPage";
import FAQPage from "../pages/FAQPage";
import BlogPage from "../pages/BlogPage";
import CartPage from "../pages/CartPage";

const Router = () => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setPageLoading(false);
  }, []);

  return (
    <main>
      {pageLoading ? (
        <h1 className="pageloading">PAGE IS LOADING...</h1>
      ) : (
        <Switch>
          <Route exact path="/" component={() => <MainPage />} />
          <Route path="/plants" component={() => <PlantsPage />} />
          <Route path="/supplies" component={() => <SuppliesPage />} />
          <Route path="/merch" component={() => <MerchPage />} />
          <Route path="/faq" component={() => <FAQPage />} />
          <Route path="/blog" component={() => <BlogPage />} />
          <Route path="/cart" component={() => <CartPage />} />
        </Switch>
      )}
    </main>
  );
};

export default Router;
