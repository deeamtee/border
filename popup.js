
function sendContent(data) {
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
    const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"data": data});
  });
}

window.addEventListener('DOMContentLoaded', function (evt) {
  const button = document.querySelector('.buttonOn');
  const buttonOff = document.querySelector('.buttonOff');

  button.addEventListener('click', function onClick(event) {
    sendContent({ type: 'toggle', value: true });
    return false;
  });
  buttonOff.addEventListener('click', function onClick(event) {
    sendContent({ type: 'toggle', value: false });
    return false;
  });
});