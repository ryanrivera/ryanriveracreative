import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";

import { Bounded } from "../../components/Bounded";

const Image = ({ slice, index }) => {
  const image = slice.primary.image;

  return (
    <section className="image-section">
      <div className="container">
        <div className="image mb-2">
          {prismicH.isFilled.image(image) && (
            <PrismicNextImage field={image} layout="responsive" />
          )}
          <p className="my-1 text-sm">{slice.primary.imageText}</p>
        </div>
        <div className="text">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
    </section>
  );
};

export default Image;
