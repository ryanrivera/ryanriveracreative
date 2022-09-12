import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";

import { Bounded } from "../../components/Bounded";

const HomeHero = ({ slice, index }) => {
  const image = slice.primary.image;

  return (
    <section className="home-hero">
      <div className="container gap-12 md:flex">
        <div className="image mb-2 w-5/12 lg:w-2/12">
          {prismicH.isFilled.image(image) && (
            <PrismicNextImage
              field={image}
              layout="responsive"
              className="rounded-full"
            />
          )}
        </div>
        <div className="text w-11/12 md:w-7/12 lg:w-7/12">
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
