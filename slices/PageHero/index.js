import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { Link } from "next/link";

const PageHero = ({ slice }) => (
  <section className="page-hero">
    <div className="container">
      <div className="back mb-10">
        <Link href="/">&#8592; back</Link>
      </div>
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
    </div>
  </section>
);

export default PageHero;
