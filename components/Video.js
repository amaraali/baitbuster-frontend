import { useState } from "react";
import Container from "./Container";

const Video = () => {
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:my-20 rounded-2xl ">
        <div
          className="relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-purple-400 to-indigo-700"
        >
          <iframe className="w-full aspect-video" src="https://www.youtube-nocookie.com/embed/DEpwTZSPxq0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </Container>
  );
}

export default Video;