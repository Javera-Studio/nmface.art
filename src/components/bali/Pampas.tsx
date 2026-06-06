const grasLeft = "/images/gras_left.png";
const grasRight = "/images/gras_right.png";

type Side = "left" | "right";

export function Pampas({ side }: { side: Side }) {
  const src = side === "left" ? grasLeft : grasRight;
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      loading="lazy"
      className={`pampas-deco ${side === "left" ? "pampas-left" : "pampas-right"}`}
    />
  );
}
