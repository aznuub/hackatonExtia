import instagram from "../../../images/media/Insta.png";
import linkedin from "../../../images/media/In.png";
import comet from "../../../images/media/Comet.png";
import placeToWork from "../../../images/media/greatPlacetowork.png";
import greatplaceToWork from "../../../images/media/GreatPlaceWork.png";
import "./socialMedia.css";
import { t } from "i18next";


function UpSide(props) {
  return (
    <div className='logoTopContainer'>
      <a target={"_blank"} href="https://www.instagram.com/extia_espana/" rel="noreferrer">
        <img alt="instagram" className="mediaPictoFixed" src={instagram} />
      </a>
      <a target={"_blank"} href="https://www.linkedin.com/company/extia/" rel="noreferrer">
        <img alt="linkedin" className="mediaPictoFixed" src={linkedin} />
      </a>
    </div>
  )
}

function LeftSide(props) {
  return (
    <div style={{ width: '25%' }}>
      <p className="text">
        <a target={"_blank"} className="basicLink" href={`https://www.extia-group.com/es-${props.lng}/about-us`} rel="noreferrer">
          {t('who are we')}
        </a>
      </p>
      <p className="text">
        <a target={"_blank"} className="basicLink" href={`https://www.extia-group.com/es-${props.lng}/join-us`} rel="noreferrer">
          {t('join us')}
        </a>
      </p>
      <p className="text">
        <a target={"_blank"} className="basicLink" href={`https://www.extia-group.com/es-${props.lng}/expertise`} rel="noreferrer">
          {t('our expertise')}
        </a>
      </p>
    </div>
  );
}

function MiddleSide(props) {
  return (
    <div style={{ width: '25%', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <p className="text">
        <a target={"_blank"} className="basicLink" href={`https://www.extia-group.com/es-${props.lng}/inside-extia`} rel="noreferrer">
          {t('inside Extia')}
        </a>
      </p>
      <a target={"_blank"} className="basicLink" href={`https://www.extia-group.com/es-${props.lng}/comet`} rel="noreferrer">
        <img alt="mediaComet" style={{width: '80%'}} src={comet} />
      </a>
      <span className="dataText">
        {t('meteoDataFrom')}
      </span>
      <span className="dataText">
        {t('costLivingDataFrom')}
      </span>
    </div>
  );
}



export function SocialMedia(props) {

  function RightSide(props) {
    return (
      <div style={{ width: '25%' }} format={props.format}>
        <p className="text">
        <a target={"_blank"} className="basicLink" href={`https://www.extia-group.com/es-${props.lng}/contact`} rel="noreferrer">
          {t('contact us')}
          </a>
        <div style={(props.format !== 's' && props.format !== 'm') ? { display: 'flex', flexDirection: 'row', alignItems:"center", width:"100%" } : {width:"100%"}}>
          <img alt="placeToWork" style={{ width: '50%'}} src={placeToWork} />
          <img alt="greatplaceToWork" style={{ width: '50%'}} src={greatplaceToWork} />
        </div>
        </p>
      </div>
    );
  }

  return (
    <div format={props.format} className="footer">
      <UpSide lng={props.lng} />
      <div style={{ paddingTop: "50px" }} />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", paddingLeft: "10%", paddingRight: "10%", minWidth: "310px" }}>
        <LeftSide lng={props.lng} />
        <div className="line" />
        <MiddleSide lng={props.lng} />
        <div className="line" />
        <RightSide lng={props.lng} format={props.format} />
      </div>
      <span className="textDown">{t('eco conclusion')}</span>
    </div>
  );
}
