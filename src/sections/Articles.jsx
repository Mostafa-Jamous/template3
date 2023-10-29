import React from "react";
import MainTitle from "../components/MainTitle";
import cat1 from "../imgs/cat-01.jpg";
import cat2 from "../imgs/cat-02.jpg";
import cat3 from "../imgs/cat-03.jpg";
import cat4 from "../imgs/cat-04.jpg";
import cat5 from "../imgs/cat-05.jpg";
import cat6 from "../imgs/cat-06.jpg";
import cat7 from "../imgs/cat-07.jpg";
import cat8 from "../imgs/cat-08.jpg";
import ArticlesItem from "../components/ArticlesItem";

function Articles() {
  return (
    <div id="articles">
      <MainTitle title="ARTICLES" />
      <div className="md:w-[80%] lg:w-[85%] md:mx-auto lg:mx-auto px-2 py-[100px] articlesContainer">
        <ArticlesItem photo={cat1} />
        <ArticlesItem photo={cat2} />
        <ArticlesItem photo={cat3} />
        <ArticlesItem photo={cat4} />
        <ArticlesItem photo={cat5} />
        <ArticlesItem photo={cat6} />
        <ArticlesItem photo={cat7} />
        <ArticlesItem photo={cat8} />
      </div>
    </div>
  );
}

export default Articles;
