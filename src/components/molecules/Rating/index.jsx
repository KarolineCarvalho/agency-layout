import Image from "next/image";
import styles from "./styles.module.scss";

const Rating = ({ rate }) => {
  function renderNtimes(times, img, keyBase) {
    const number = [...Array(times)];
    return number.map((_, index) => (
      <Image
        height={24}
        width={24}
        src={`images/${img}`}
        key={keyBase + index}
        alt="Rating Star"
      />
    ));
  }

  function calculateRate(rate) {
    if (rate > 10) {
      rate = 10;
    }
    let dividedByTwo = rate / 2;
    const isInt = dividedByTwo % 1 === 0;

    if (isInt) {
      return renderNtimes(dividedByTwo, "star-filled.svg", "filledStar");
    } else {
      const intPortion = Math.floor(dividedByTwo);
      return (
        <>
          {renderNtimes(intPortion, "star-filled.svg", "filledStar")}
          {renderNtimes(1, "star-half.svg", "halfStar")}
        </>
      );
    }
  }
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
