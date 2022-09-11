import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";

import { Bounded } from "../../components/Bounded";

const Text = ({ slice }) => {
  return (
    <section className={slice.primary.className}>
      <div className="container mx-auto flex max-w-6xl">
        <div className="lg:w-8/12">
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </section>
    // <Bounded as="section" className="bg-white leading-relaxed">
    //   <div className="container mx-auto max-w-3xl">
    //     <div
    //       className={clsx(
    //         slice.variation === "twoColumns" && "md:columns-2 md:gap-6"
    //       )}
    //     >
    //       <PrismicRichText field={slice.primary.text} />
    //     </div>
    //   </div>
    // </Bounded>
  );
};

export default Text;
