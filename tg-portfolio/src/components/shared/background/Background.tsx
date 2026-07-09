import Canvas from "./Canvas";
import Glow from "./Glow";
import Grid from "./Grid";
import Blueprint from "./Blueprint";

export default function Background() {
  return (
    <>
      <Canvas />
      <Grid />
      <Blueprint />
      <Glow />
    </>
  );
}