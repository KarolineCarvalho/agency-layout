import Text from "@atoms/Text";
import styles from "./styles.module.scss";
import { useSpring, animated } from "react-spring";
import Heading from "@atoms/Heading";

const Counter = ({ counter, symbol, description }) => {
  const convertToNumber = (counter) => {
    if (typeof counter === "string") {
      return Number(counter);
    } else {
      return counter;
    }
  };

  function abbrNum(number, decPlaces) {
    if (number >= 10000) {
      // 2 decimal places => 100, 3 => 1000, etc
      decPlaces = Math.pow(10, decPlaces);
      // Enumerate number abbreviations
      let abbrev = ["K", "M", "B", "T"];

      // Go through the array backwards, so we do the largest first
      for (let i = abbrev.length - 1; i >= 0; i--) {
        // Convert array index to "1000", "1000000", etc
        let size = Math.pow(10, (i + 1) * 3);
        // If the number is bigger or equal do the abbreviation
        if (size <= number) {
          // Here, we multiply by decPlaces, round, and then divide by decPlaces.             // This gives us nice rounding to a particular decimal place.
          number = Math.round((number * decPlaces) / size) / decPlaces;
          // Add the letter for the abbreviation
          var conterAbbrev = abbrev[i];

          break;
        }
      }
    }

    return [number, conterAbbrev];
  }
  const counterValue = abbrNum(convertToNumber(counter), 2)[0];
  const counterLetter = abbrNum(convertToNumber(counter), 1)[1];

  const animation = useSpring({
    val: counterValue,
    from: { val: 0 },
    config: { mass: 1, tension: 10, friction: 6 },
  });
  return (
    <div className={styles.counter}>
      <Heading level="3">
        <animated.span>
          {animation.val.to((val) => Math.floor(val).toLocaleString("de"))}
        </animated.span>
        {counterLetter}
        {symbol}
      </Heading>
      <Text size="big">{description}</Text>
    </div>
  );
};

export default Counter;
