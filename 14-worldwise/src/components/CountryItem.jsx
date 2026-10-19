import styles from "./CountryItem.module.css";
import { getFlagImageUrl } from "../utils";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <img className={styles.flag} src={getFlagImageUrl(country.emoji)} alt="" />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
