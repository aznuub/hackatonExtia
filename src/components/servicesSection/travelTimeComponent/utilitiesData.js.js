import extia from "../../../images/Extiaorangeblanc.svg";
import airport from "../../../images/select/plane.png";
import bateau from "../../../images/select/bateau.png";
import catalunia from "../../../images/select/catalunia.png";
import gothico from "../../../images/select/gothico.png";
import parc from "../../../images/select/parc.png";
import sagrada from "../../../images/select/sagrada-familia.png";
import train from "../../../images/select/train.png";
import arene from "../../../images/select/arene.png";
import beach from "../../../images/select/chaise-de-plage.png";

import { t } from "i18next";

export const travelData = [
  {
    value: "Extia",
    name: t("cityMenuItem1"),
    picture: extia
  },
  {
    value: "Airport",
    name: t("cityMenuItem2"),
    picture: airport
  },
  {
    value: "Station",
    name: t("cityMenuItem3"),
    picture: train
  },
  {
    value: "Barceloneta",
    name: t("cityMenuItem4"),
    picture: beach
  },
  {
    value: "Catalunya",
    name: t("cityMenuItem5"),
    picture: catalunia
  },
  {
    value: "Olimpic",
    name: t("cityMenuItem6"),
    picture: bateau
  },
  {
    value: "Ciutadella",
    name: t("cityMenuItem7"),
    picture: parc
  },
  {
    value: "Gracia",
    name: t("cityMenuItem8"),
    picture: parc
  },
  {
    value: "Sagrada",
    name: t("cityMenuItem9"),
    picture: sagrada
  },
  {
    value: "Bogatell",
    name: t("cityMenuItem10"),
    picture: beach
  },
  {
    value: "Nova",
    name: t("cityMenuItem11"),
    picture: beach
  },
  {
    value: "Espanya",
    name: t("cityMenuItem12"),
    picture: arene
  },
  {
    value: "Gothic",
    name: t("cityMenuItem13"),
    picture: gothico
  },
]