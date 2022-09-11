import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { Image, PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { ConditionalWrap } from "../../components/ConditionalWrap";

const ImageCard = ({ item }) => {
  const image = item.image;

  return (
    <li className="">
      {prismicH.isFilled.image(image) && (
        <div className="image mb-2.5 aspect-square overflow-hidden bg-gray-100">
          <ConditionalWrap
            condition={prismicH.isFilled.link(item.link)}
            wrap={({ children }) => (
              <PrismicLink field={item.link} tabIndex="-1">
                {children}
              </PrismicLink>
            )}
          >
            <img
              src={item.image.url}
              className="h-full w-full max-w-none object-cover transition-all hover:scale-110"
            />
            {/* <PrismicNextImage field={image} className="object-cover" /> */}
          </ConditionalWrap>
        </div>
      )}
      <div className="text leading-relaxed">
        <PrismicRichText field={item.text} />
      </div>
      {/* {prismicH.isFilled.link(item.link) && (
        <div>
          <PrismicLink field={item.link} className="font-semibold">
            {item.buttonText || "More Info"}
          </PrismicLink>
        </div>
      )} */}
    </li>
  );
};

const ImageCards = ({ slice }) => {
  return (
    <Bounded as="section" className="image-cards">
      <div className="container">
        {/* {prismicH.isFilled.richText(slice.primary.heading) && (
          <Heading className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )} */}
        <ul className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {slice.items.map((item) => (
            <ImageCard key={item.image.url} item={item} />
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default ImageCards;
