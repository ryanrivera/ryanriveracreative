import React from "react";
import { PrismicRichText } from "@prismicio/react";

const PageHero = ({ slice }) => (
  <section className="page-hero">
    <div className="container">
      <div className="back mb-10">
        <a href="/">&#8592; back</a>
      </div>
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
    </div>
  </section>
);

export default PageHero;
