import React from "react";
import { PrismicRichText } from "@prismicio/react";

const Video = ({ slice }) => (
  <section>
    <div className="container mx-auto max-w-3xl">
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.subTitle} />
      <PrismicRichText field={slice.primary.description} />
      <div className="video-container my-12">
        <div className="video-player">
          <video
            poster={slice.primary.videoThumbnail.url}
            autoPlay={true}
            playsInline={true}
            loop={true}
            muted={true}
            data-object-fit="cover"
          >
            <source src={slice.primary.videoWEBM.url} type="video/webm" />
            <source src={slice.primary.videoMP4.url} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>
);

export default Video;
