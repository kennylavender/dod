import 'babel-polyfill'
import 'normalize.css'
import './index.css';
import './bower_components/font-awesome/css/font-awesome.css'
import './Intro.css'
import './Intro.js'
import Notice from './notice.js'

var DEBUG = false;

var testDate = {};
testDate.start = new Date();
testDate.start = testDate.start.setSeconds(testDate.start.getSeconds() - 1)
testDate.end = new Date();
testDate.end = testDate.end.setSeconds(testDate.end.getSeconds() + 30);

var x = new Date();
var offset = x.getTimezoneOffset() / 60;

var dates = [
  {'start': Date.UTC(2017, 9, 6, 17 + offset, 0), end: Date.UTC(2017, 9, 6, 22 + offset, 30)},
  {'start': Date.UTC(2017, 9, 7, 17 + offset, 0), end: Date.UTC(2017, 9, 7, 22 + offset, 30)},
  {'start': Date.UTC(2017, 9, 13, 17 + offset, 0), end: Date.UTC(2017, 9, 13, 22 + offset, 30)},
  {'start': Date.UTC(2017, 9, 14, 17 + offset, 0), end: Date.UTC(2017, 9, 14, 22 + offset, 30)},
  {'start': Date.UTC(2017, 9, 20, 17 + offset, 0), end: Date.UTC(2017, 9, 20, 22 + offset, 30)},
  {'start': Date.UTC(2017, 9, 21, 17 + offset, 0), end: Date.UTC(2017, 9, 21, 22 + offset, 30)},
  {'start': Date.UTC(2017, 9, 27, 17 + offset, 0), end: Date.UTC(2017, 9, 27, 22 + offset, 30)},
  {'start': Date.UTC(2017, 9, 28, 17 + offset, 0), end: Date.UTC(2017, 9, 28, 22 + offset, 30)},
];

if ( DEBUG ) dates.push(testDate)

var notice = Notice({dates: dates})
var noticeEl = document.getElementById('notice');
var noticeDetails = document.getElementById('notice-details')

var noticeDetailsClose = document.getElementById('notice-details__close');
var noticeDetailsToggle = document.getElementById('notice-details__toggle');

var hideNoticeDetails = function () {
    noticeDetails.classList.remove('is-open');
}
var showNoticeDetails = function () {
    noticeDetails.classList.add('is-open');
}
var toggleNoticeDetails = function (e) {
    e.preventDefault();
    if (noticeDetails.classList.contains('is-open')) {
        hideNoticeDetails();
    } else {
        showNoticeDetails();
    }
}

noticeDetailsClose.addEventListener('click', function(e) { toggleNoticeDetails(e) }, false);
noticeDetailsToggle.addEventListener('click', function(e) { toggleNoticeDetails(e) }, false);


var showNotice = function() {
    if ( DEBUG ) console.log('Show Notice')
    if (noticeEl) {
        noticeEl.classList.remove('hide');
    }
}
var hideNotice = function () {
    if ( DEBUG ) console.log('Hide Notice')
    if(noticeEl) {
        noticeEl.classList.add('hide');
    }
}

var check = function() {
    if (notice.run(Date.now())) {
        showNotice()
    } else {
        hideNotice()
    }
}
var timer = function() {
    setTimeout( function(){ check(); timer(); }, 6000)
}

check();
timer();