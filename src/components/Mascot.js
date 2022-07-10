import { useState } from "react";
import { useEffect } from "react";
import useWindowDimensions from "../hooks/use-window-dimension";

export default function Mascot({ action }) {
  const [mascotAction, setMascotAction] = useState(
    action || "/images/default.png"
  );

  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    switch (action) {
      case "happy":
        setMascotAction("/images/happy.png");
        break;
      case "explain":
        setMascotAction("/images/explain.png");
        break;
      case "wow":
        setMascotAction("/images/wow.png");
        break;
      default:
        setMascotAction("/images/default.png");
        break;
    }
  }, [action]);
  return windowWidth >= 800 ? (
    <img
      src={mascotAction}
      style={{
        maxWidth: 450,
      }}
      className="img-fluid mx-auto d-block"
      alt="welcome-mascot"
    />
  ) : (
    <img
      src={mascotAction}
      style={{
        maxWidth: 300,
      }}
      className="img-fluid mx-auto d-block"
      alt="welcome-mascot"
    />
  );
}
