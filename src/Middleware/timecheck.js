function timecheck(req, res, next) {
  var validDays = ["Mon", "Tue", "Wed", "Thur", "Fri"];
  var validEntryDate = 9;

  var validCloseDate = 17;

  var currentDate = Date().split(" ");
  var currentTime = currentDate[4].split(":");
  if (
    validDays.includes(currentDate[0]) &&
    Number(currentTime[0] >= validEntryDate && currentTime[0] <= validCloseDate)
  ) {
    next();
  } else {
    return res.send({
      message: "The website is closed at this hour",
    });
  }
}
export default timecheck;
