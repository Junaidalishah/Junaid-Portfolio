import junaid from "../assets/junaid.jpg";

function Logo() {
  return (
    <img
      src={junaid}
      alt="Junaid Ali Shah"
      className="h-full w-full rounded-xl object-cover"
    />
  );
}

export default Logo;
