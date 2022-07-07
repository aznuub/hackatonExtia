import "./servicesSection.css";

export function SettlementSection(props) {
    const city = props.city;
    const format = props.format;
  
    var backgroundStyle = {
      backgroundColor: "#FC9254",
      position: "relative",
      width: "100%",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "10px",
    }
  
    var flexBox = {
      display: "inline-flex",
    }
    switch (format) {
      case "s":
        flexBox = {
          ...flexBox,
          display: "block",
        }
        break;
      case "m":
        flexBox = {
          ...flexBox,
          display: "",
        }
        break;
      case "l":
        backgroundStyle = {
          ...backgroundStyle,
          padding: "24px 3% 24px 12%",
        };
        break;
      default:
        break;
    }
  
    return (
      <div style={backgroundStyle} id="weather">
        <div style={flexBox}>
          " Stuff"
        </div>
      </div>
    );
  }
  