
var between = function (val, start, end) {
  if (val > start && val < end) {
    return true;
  } else {
    return false;
  }
}

var Notice = function (data) {
  var active = false;
  var dates = data.dates;
  
  var run = function (val) {
    active = false;
    for (var i = 0; i < dates.length; i++) {
      if ( between(val, dates[i].start, dates[i].end) ) {
        active = true;
      }
    }
    return active
  }
  
  return {
    run: run
  }
}

export default Notice