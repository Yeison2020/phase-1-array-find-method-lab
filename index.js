function superbowlWin(record) {
  for (let i = 0; i < record.length; i++) {
    if (record[i].result === "W") {
      return record[i].year;
    }
  }
}

// function superbowlWin(record) {
//   const found = record.find((element) => {
//     if (element.result === "W") {
//       return element.year;
//     }
//   });
//   return found.year;
// }
