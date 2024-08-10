import PauseableVideo from "./video";

export const Animataion = () => (
  <PauseableVideo width={800} height={800}>
    <source src="/videos/sphere.mp4" type="video/mp4" />
    <source src="/videos/sphere.webm" type="video/webm" />
  </PauseableVideo>
);
