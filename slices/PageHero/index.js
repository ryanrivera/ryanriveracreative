import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { useRouter } from "next/router";

const PageHero = ({ slice }) => {
  const router = useRouter();

  return (
    <section className="page-hero">
      <div className="container">
        <div className="back mb-10">
          <span onClick={() => router.back()}>&#8592; back</span>
        </div>
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
      </div>
    </section>
  );
};

export default PageHero;
