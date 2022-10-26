const lonely = [4, 7, 9, 3, 9, 7, 4];
let findSingleValue = lonely.filter((lonelyValue) => {
  return (
    lonely.findIndex((UniqueValue) => UniqueValue == lonelyValue) ==
    lonely.lastIndexOf(lonelyValue)
  );
});
document.write("The Single Value is " + String(findSingleValue));
