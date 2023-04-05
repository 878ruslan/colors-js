const COLORS = [
  { code: 'a8dadc', rgb: '168, 218, 220' },
  { code: '3a5a40', rgb: '58, 90, 64' },
  { code: '0096c7', rgb: '0, 150, 199' },
  { code: 'eae2b7', rgb: '234, 226, 183' },
  { code: 'f5cac3', rgb: '245, 202, 195' },
  { code: '9bf6ff', rgb: '155, 246, 255' },
  { code: 'f72585', rgb: '247, 37, 133' },
  { code: 'fee440', rgb: '254, 228, 64' },
  { code: '6a4c93', rgb: '106, 76, 147' },
  { code: 'eb5e28', rgb: '235, 94, 40' },
  { code: '007200', rgb: '0, 114, 0' }
];

let displayType = 'both';

function changeBackgroundColor() {

  const color = COLORS[Math.floor(Math.random() * COLORS.length)];

  document.body.style.backgroundColor = '#' + color.code;

  setTextColor(color.code);

  let displayString = '';

  if (displayType === 'hex') {
    displayString = `#${color.code}`;
  } else if (displayType === 'rgb') {
    displayString = `rgb: (${color.rgb})`;
  } else {
    displayString = `Color Code: ${color.code}\nColor RGB: ${color.rgb}`;
  }

  const colorNameEl = document.getElementById('name');
  colorNameEl.textContent = displayString;
  

  colorNameEl.addEventListener('click', function() {
    navigator.clipboard.writeText(`#${color.code}`);
    alert(`Copied "${color.code}" to clipboard`);
  });
}

window.addEventListener('click', changeBackgroundColor);

document.getElementById('hex-btn').addEventListener('click', function() {
  displayType = 'hex';
});

document.getElementById('rgb-btn').addEventListener('click', function() {
  displayType = 'rgb';
});

function setTextColor(color) {
  const red = parseInt(color.substring(0, 2), 16);
  const green = parseInt(color.substring(2, 4), 16);
  const blue = parseInt(color.substring(4, 6), 16);

  const brightness = Math.round(((red * 299) + (green * 587) + (blue * 114)) / 1000);

  const textColor = (brightness > 125) ? 'black' : 'white';

  const colorNameEl = document.getElementById('name');
  const hexBtnEl = document.getElementById('hex-btn');
  const rgbBtnEl = document.getElementById('rgb-btn');
  
  colorNameEl.style.color = textColor;
  hexBtnEl.style.color = textColor;
  rgbBtnEl.style.color = textColor;
  

  colorNameEl.style.cursor = 'pointer';
  hexBtnEl.style.cursor = 'pointer';
  rgbBtnEl.style.cursor = 'pointer';
}
