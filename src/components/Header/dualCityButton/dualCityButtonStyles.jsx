import { color } from "@mui/system";

const buttonStyle = {
    position: "relative",
    borderColor: "transparent",
    alignItems: "center",
    fontFamily: "Mont, bold",
    lineHeight: "1",
};

const boxStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "50px",
    opacity: "0.9",
    fontSize: "160%",
    border: "2px solid #EFEFEF",
    backgroundColor: "white",
    height: "100px",
    width: "550px",
    boxShadow: "-3px 10px 25px rgba(0, 0, 0, 0.1)",
};

const boxStyleSmall = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "50px",
    opacity: "0.9",
    fontSize: "min(120%, 4vw)",
    border: "1px solid #EFEFEF",
    backgroundColor: "white",
    height: "60px",
    width: "80vw",
    boxShadow: "-3px 5px 10px rgba(0, 0, 0, 0.1)",
    zIndex: "1",
    marginLeft: "auto",
    marginRight: "auto",
};

const selectStyle = {
    height: "60px",
    borderRadius: "50px",
    backgroundColor: "white",
    fontSize: "1OO%",
    width: "275px",
    marginLeft: "10px",
    color: "transparent",
    borderColor: "transparent",
};

const selectStyleSmall = {
    height: "45px",
    borderRadius: "50px",
    backgroundColor: "white",
    fontSize: "1OO%",
    width: "50%",
    minWidth: "50%",
    marginLeft: "5px",
    color: "#FC9254",
};

const cityNameDepartureStyle = {
    fontSize: "100%",
    color: "#FC9254",
    margin: "auto",
};

const cityNameArrivalStyle = {
    fontSize: "100%",
    color: "#FC1235",
    margin: "auto",
};

const logoStyle = {
    maxWidth: "60px",
    maxHeight: "60px",
    verticalAlign: "middle",
};

const logoStyleSmall = {
    maxWidth: "min(28px, 6vw)",
    maxHeight: "min(28px, 6vw)",
    verticalAlign: "middle",
};

const logoStyleSmallParis = {
    maxWidth: "min(28px, 6vw)",
    maxHeight: "min(28px, 6vw)",
    verticalAlign: "middle",
    marginRight: "5px",
};

export {
    logoStyle,
    logoStyleSmall,
    logoStyleSmallParis,
    cityNameArrivalStyle,
    cityNameDepartureStyle,
    boxStyle,
    boxStyleSmall,
    selectStyle,
    selectStyleSmall,
    buttonStyle
};