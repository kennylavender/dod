const firebase = require("firebase/app");
require("firebase/database");

const soldOutEl = document.getElementById('sold-out-flag');
const isVisibleClass = 'is-visible'

const showSoldOut = () => soldOutEl.classList.add(isVisibleClass);
const hideSoldOut = () => soldOutEl.classList.remove(isVisibleClass);

const toggleSoldOut = (isSoldOut) => isSoldOut ? showSoldOut() : hideSoldOut()

const getIsSoldOut = x => x.isSoldOut;

const getSnapshotValue = x => x.val()

const onSoldOutChange = x => toggleSoldOut(getIsSoldOut(getSnapshotValue(x)))

firebase.database().ref('/soldOut').on('value', onSoldOutChange)