import { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { cityData } from "../../../data/cityName";
import { t } from "i18next";
import "./dualCityButton.css";
import {
    logoStyle,
    logoStyleSmall,
    logoStyleSmallParis,
    cityNameArrivalStyle,
    cityNameDepartureStyle,
    boxStyle,
    boxStyleSmall,
    selectStyle,
    selectStyleSmall,
    buttonStyle,
} from './dualCityButtonStyles';

export function DualCityButton(props) {
    // function selectCity(cityData) {
    //     setCity(cityData);
    // }

    function selectDestination(cityData) {
        props.destinationChange(cityData)
        setDestination(cityData);
    }

    function selectOrigin(cityData) {
        props.originChange(cityData)
        setOrigin(cityData);
    }

    // const [city, setCity] = useState(props.city);
    // const [open, setOpen] = useState(false);
    const [destination, setDestination] = useState(props.destination);
    const [origin, setOrigin] = useState(props.origin);
    const [openLeft, setOpenLeft] = useState(false);
    const [openRight, setOpenRight] = useState(false);

    function CityItemSelector(props) {
        return (
            <div className="cityItemMenuHeader" onClick={() => props.selector(props.cityData)}>
                <p className="cityItemTextHeader">{t(props.cityData.name)}</p>
                {props.cityData.logo_o ? (
                    <img src={props.cityData.logo_o} style={props.cityData.name === "Paris" ? logoStyleSmallParis : logoStyleSmall} alt="iconTravelTime" />
                ) : (
                    <div className="emptyPictureItemHeader" />
                )}
            </div>
        );
    }

    // useEffect(() => {
    //     props.onChange(city);
    // }, [props, city]);

    useEffect(() => {
        props.onChange(destination);
    }, [props, destination]);

    useEffect(() => {
        props.onChange(origin);
    }, [props, origin]);

    let CityNameTab = (props) => cityData.map((element) => {
        return (
            <MenuItem key={element.name}>
                <CityItemSelector cityData={element} selector={props.selector} />
            </MenuItem>
        );
    });

    


    return (
        <FormControl style={buttonStyle} format={props.format} fullwidth="true">
            <Box format={props.format} style={props.format === "s" ? boxStyleSmall : boxStyle}>
                <Select
                    key="originKey"
                    value={""}
                    style={props.format === "s" ? selectStyleSmall : selectStyle}
                    sx={{ m: 1, minWidth: 200 }}
                    open={openRight}
                    onClose={() => setOpenRight(false)}
                    onClick={() => setOpenRight(!openRight)}
                >
                    <CityNameTab selector={selectOrigin} />
                </Select>
                <div key="originDivKey" className="elementSelected" format={props.format} onClick={() => setOpenRight(!openRight)}>
                    <img src={origin.logo_o} alt="logo" style={props.format === "s" ? logoStyleSmall : logoStyle} />
                    <div className="nameAndCode">
                        <span style={cityNameDepartureStyle}>{t(origin.name)}</span>
                        {/* <span>{origin.name}</span> */}
                    </div>
                </div>


                <div className="separatorStyle"></div>

                <Select
                    key="destinationKey"
                    value={""}
                    style={props.format === "s" ? selectStyleSmall : selectStyle}
                    sx={{ m: 1, minWidth: 200 }}
                    open={openLeft}
                    onClose={() => setOpenLeft(false)}
                    onClick={() => setOpenLeft(!openLeft)}
                >
                    {/* {cityNameTab} */}
                    <CityNameTab selector={selectDestination} />
                </Select>
                <div key="destinationDivKey" className="elementSelected destinationElement" format={props.format} onClick={() => setOpenLeft(!openLeft)}>
                    <img src={destination.logo} alt="logo" style={props.format === "s" ? logoStyleSmall : logoStyle} />
                    <div className="nameAndCode">
                        <span style={cityNameArrivalStyle}>{t(destination.name)}</span>
                        {/* <span style={cityNameDepartureStyle}>{destination.name}</span> */}
                    </div>
                </div>
            </Box>
        </FormControl>
    );
}
