// １
const array = [2, 4, 7, 5, 4, 3, 8];
var a = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
})
console.log(a)

// 2
function LeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let checkYearA = 2020;
if (LeapYear(checkYearA)) {
  console.log(checkYearA + '年はうるう年です');
} else {
  console.log(checkYearA + '年はうるう年ではありません');
}

let checkYearB = 2021;
if (LeapYear(checkYearB)) {
  console.log(checkYearB + '年はうるう年です');
} else {
  console.log(checkYearB + '年はうるう年ではありません');
}

