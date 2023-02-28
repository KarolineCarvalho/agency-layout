import Text from "@atoms/Text";
import styles from "./styles.module.scss";
import { useSpring, animated } from "react-spring";
import Heading from "@atoms/Heading";
import { abbrvNum, convertToNumber } from "@utils/index";

const Counter = ({ counter, symbol, description }) => {
  const counterValue = abbrvNum(convertToNumber(counter), 2)[0];
  const counterLetter = abbrvNum(convertToNumber(counter), 1)[1];

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
