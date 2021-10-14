function addWaterMarker(str, parentNode, font, textColor) {
    // 水印文字，父元素，字体，文字颜色+
    console.log(str)
    let can = document.createElement('canvas')
    parentNode.appendChild(can)
    can.width = 200
    can.height = 100
    can.style.display = 'none'
    var cans = can.getContext('2d')
    cans.rotate((-20 * Math.PI) / 180)
    cans.font = font || '16px Microsoft JhengHei'
        // cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
    cans.fillStyle = textColor || 'rgba(0, 0, 0)'
    cans.textAlign = 'left'
    cans.textBaseline = 'Middle'
        // cans.fillText(str, can.width / 10, can.height / 2)
    str.forEach((element, index) => {
        cans.fillText(element, can.width / 10, can.height * 0.3 + (index + 1) * 22)
    });
    parentNode.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
}

const waterMarker = {
    bind: function(el, binding) {
        addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
    },
}

export default waterMarker