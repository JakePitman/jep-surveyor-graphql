export default (string, maxLength) => {
  const individualWordCheck = string
    .split(" ")
    .map(word => {
      if (word.length > maxLength / 5) {
        return word.substring(0, maxLength / 5) + "..";
      } else {
        return word;
      }
    })
    .join(" ");

  if (individualWordCheck.length > maxLength) {
    return individualWordCheck.substring(0, maxLength) + "..";
  } else {
    return individualWordCheck;
  }
};
