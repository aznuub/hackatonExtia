import React from "react";
import "./App.css";
import Homepage from "./containers/homepage";
import { withNamespaces } from 'react-i18next';
import i18n from './i18n';

function App({ t }) {
  const [format, setFormat] = React.useState();
  const [orientation, setOrientation] = React.useState();
  const [lng, setLng] = React.useState('FR');
  React.useLayoutEffect(() => {
    const updateSize = () => {
      setFormat(window.innerWidth <= 768 ? 's' : window.innerWidth <= 1154 ? 'm' : 'l');
      setOrientation(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);


  const changeLanguage = (lngToSet) => {
    setLng(lngToSet);
    i18n.changeLanguage(lngToSet);
  }
  require('dotenv').config()
  return <Homepage t={t} lngChange={changeLanguage} lng={lng} format={format} orientation={orientation}/>
}

export default withNamespaces()(App);
