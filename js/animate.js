function animate(obj, targer, callback) {
    clearInterval(obj.timer)//这个是为了防止连续点击导致开了很多定时器 导致速度越来越快
    obj.timer = setInterval(function () {
        if (obj.offsetLeft == targer) {
            clearInterval(obj.timer)
            //回调函数写到定时器结束后面
            if (callback) { callback() }
        }
        // var step = Math.floor((targer - obj.offsetLeft) / 10)
        var step = (targer - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        obj.style.left = obj.offsetLeft + step + 'px'
    }, 15)
}

