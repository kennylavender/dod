import 'babel-polyfill'
import 'normalize.css'
import './index.css';
import './bower_components/font-awesome/css/font-awesome.css'
import './Intro.css'
import './Intro.js'
import Notice from './notice.js'
import './init-firebase';
import './sold-out-flag.css'
import './sold-out-flag.js'

var DEBUG = true;

var testDate = {};
testDate.start = new Date();
testDate.start = testDate.start.setSeconds(testDate.start.getSeconds() - 1)
testDate.end = new Date();
testDate.end = testDate.end.setSeconds(testDate.end.getSeconds() + 30);

var dates = [
  {'start': Date.parse("05 Oct 2018 17:30:00 PDT"), end: Date.parse("05 Oct 2018 24:00:00 PDT")},
  {'start': Date.parse("06 Oct 2018 17:30:00 PDT"), end: Date.parse("06 Oct 2018 24:00:00 PDT")},
  {'start': Date.parse("12 Oct 2018 17:30:00 PDT"), end: Date.parse("12 Oct 2018 24:00:00 PDT")},
  {'start': Date.parse("13 Oct 2018 17:30:00 PDT"), end: Date.parse("13 Oct 2018 24:00:00 PDT")},
  {'start': Date.parse("19 Oct 2018 17:30:00 PDT"), end: Date.parse("19 Oct 2018 24:00:00 PDT")},
  {'start': Date.parse("20 Oct 2018 17:30:00 PDT"), end: Date.parse("20 Oct 2018 24:00:00 PDT")},
  {'start': Date.parse("26 Oct 2018 17:30:00 PDT"), end: Date.parse("26 Oct 2018 24:00:00 PDT")},
  {'start': Date.parse("27 Oct 2018 17:30:00 PDT"), end: Date.parse("27 Oct 2018 24:00:00 PDT")},
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
