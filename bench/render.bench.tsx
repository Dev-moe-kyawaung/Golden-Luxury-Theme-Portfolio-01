import { renderToStaticMarkup, renderToString } from "react-dom/server";
import { bench, describe } from "vitest";
import PhoneFrame from "@/components/PhoneFrame";
import App from "@/App";
import { WORK } from "@/data";

describe("App render", () => {
  bench("renderToString - full page", () => {
    renderToString(<App />);
  });

  bench("renderToStaticMarkup - full page", () => {
    renderToStaticMarkup(<App />);
  });
});

describe("PhoneFrame render", () => {
  const videoItem = WORK.find((item) => item.mediaType === "video") ?? WORK[0];
  const imageItem = WORK.find((item) => item.mediaType === "image") ?? WORK[0];

  bench("video preview", () => {
    renderToStaticMarkup(
      <PhoneFrame src={videoItem.media} type="video" caption={videoItem.name} />
    );
  });

  bench("image preview", () => {
    renderToStaticMarkup(
      <PhoneFrame src={imageItem.media} type="image" caption={imageItem.name} />
    );
  });

  bench("all work items", () => {
    for (const item of WORK) {
      renderToStaticMarkup(
        <PhoneFrame src={item.media} type={item.mediaType} caption={item.name} />
      );
    }
  });
});
