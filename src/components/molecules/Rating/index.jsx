import Image from "next/image";
import styles from "./styles.module.scss";
import { calculateRate, renderNtimes } from "@utils/index";

const Rating = ({ rate }) => {
  return (
    <div className={styles.stars}>
      {renderNtimes(5, "star.svg", "star")}
      <div className={styles.stars__rate}>{calculateRate(rate)}</div>

      <div className={styles.rateBallon}>
        <span className={styles.rateBallon__bubble}>{rate}</span>
        <span className={styles.rateBallon__pointer}></span>
      </div>
    </div>
  );
};

export default Rating;
