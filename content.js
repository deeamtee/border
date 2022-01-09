const all = document.getElementsByTagName('*');
let state;
const body = document.getElementsByTagName('body')[0];
const currSizing = body.style.boxSizing;
const currBorder = [];

function randomColor() {
  var colors = [
    '#FF0000',
    '#FF0000',
    '#FFFF00',
    '#80FF00',
    '#00FF00',
    '#00FF80',
    '#00FFFF',
    '#0080FF',
    '#0000FF',
    '#8000FF',
    '#FF00FF',
    '#FF0080',
  ];
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return colors[getRandomInt(0, colors.length)];
}

chrome.runtime.onMessage.addListener(function (data, sender, sendResponse) {
  if (data.data.type) {
    const messageData = data.data;
    if (messageData.type == 'toggle') {
      state = messageData.value;
      if (state) {
        Array.from(all).forEach((el) => {
          currBorder.push(el.style.boxShadow);
          el.style.boxShadow = `0 0 0 1px ${randomColor()}AE`
        })
      } else {
        Array.from(all).forEach((el, i) => {
          el.style.boxShadow = currBorder[i];
        })
      }
    }
  }
});
