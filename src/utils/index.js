import Image from "next/image";

export const convertToNumber = (counter) => {
  if (typeof counter === "string") {
    return Number(counter);
  } else {
    return counter;
  }
};

export function abbrvNum(number, decPlaces) {
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

export function renderNtimes(times, img, keyBase) {
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

export function calculateRate(rate) {
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
