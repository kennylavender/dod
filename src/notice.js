var noticeEl = document.getElementById('notice');
var days = [21, 22, 28, 29]

var notice = function (date) {
    var now = new Date(Date.now())
    var month = now.getMonth();
    var day = now.getDate();
    var hour = now.getHours();
    var minutes = now.getMinutes();

    if (month !== 9) {
        return;
    }
    if ( days.indexOf(day) === -1) {
        return;
    }
    if ( hour > 22 ) {
        return;
    }
    if ( hour === 22 && minutes > 30 ) {
        return;
    }
    if (hour >= 16) {
        noticeEl.classList.remove('hide')
    }
};

notice()


var noticeToggle = document.getElementById('notice-details__toggle');
var noticeClose = document.getElementById('notice-details__close');
var noticeDetails = document.getElementById('notice-details');

var toggleNoticeDetails = function() {
    if (noticeDetails.classList.contains('is-open')) {
        noticeDetails.classList.remove('is-open')
    } else {
        noticeDetails.classList.add('is-open');
    }
}

noticeToggle.addEventListener('click', function(e) { toggleNoticeDetails(e) }, false);
noticeClose.addEventListener('click', function(e) { toggleNoticeDetails(e) }, false);



export default notice