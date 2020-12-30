const data = {
  debug: 'on',
  window: {
    title: 'Sample Konfabulator Widget',
    name: 'main_window',
    width: 500,
    height: 500,
  },
  image: {
    src: 'Images/Sun.png',
    name: 'sun1',
    hOffset: 250,
    vOffset: 250,
    alignment: 'center',
  },
  text: {
    data: 'Click Here',
    size: 36,
    style: 'bold',
    name: 'text1',
    hOffset: 250,
    vOffset: 100,
    alignment: 'center',
    onMouseUp: 'sun1.opacity = (sun1.opacity / 100) * 90;',
  },
};

function getNumTypeData(dataObj) {
  let valueArr = Object.values(dataObj);
  let keyArr = Object.keys(dataObj);
  let realValArr = Object.values(valueArr);

  let arr = [];
  for (let i = 0; i < valueArr.length; i++) {
    if (typeof valueArr[i] === 'number') {
      arr.push(keyArr[i]);
    }
  }
  return arr;
}

const numTypeData = getNumTypeData;
