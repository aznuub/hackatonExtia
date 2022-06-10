import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import "./selectLangue.css";

export function SelectLangue(props) {
  
  const [langue, setLangue] = React.useState("fr");
  
  const handleChange = (event) => {
    setLangue(event.target.value);
    props.onClick(event.target.value);
  };

  const select = {
    textAlign: 'center',
    borderRadius: '50px',
    border: `2px solid ${props.isWhite ? "white" : "#283d47"} !important`,
    color: props.isWhite ? "white" : "#283d47",
    transition: 'all 100ms ease-in-out 0ms'
  }
  
  const button = {
    borderRadius: "50px",
    width: "80%",
    height: "42px",
    margin: "0",
    color: props.isWhite ? "white" : "#283d47"
  };

  const iconStyle = makeStyles({
    icon: {
      fill: props.isWhite ? "white !important" : "#283d47",
      transition: 'fill 100ms ease-in-out 0ms'
    },
  })();
  
  return (
    <div style={{position: 'absolute', top:'50%', right:'0', transform: 'translateY(-50%)'}}>
      <FormControl style={select} sx={{ m: 1, minWidth: 96, ...select }}>
        <Select
          className="selectLanguage"
          size="large"
          style={button}
          value={langue}
          inputProps={{
            classes: {
              icon: iconStyle.icon
            }
          }}
          onChange={handleChange}
        >
          <MenuItem value={"fr"} className="MenuItemFont">FR</MenuItem>
          <MenuItem value={"en"} className="MenuItemFont">EN</MenuItem>
          <MenuItem value={"es"} className="MenuItemFont">ES</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
