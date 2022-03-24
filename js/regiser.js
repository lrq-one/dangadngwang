window.addEventListener('load', function () {
    var xin = document.querySelector('.xin_regiser')
    var qiye = document.querySelector('.qiye_regiser')
    var fqiye = document.querySelector('.qiye')
    var fxin = document.querySelector('.xinyonghu')
    var nav = document.querySelector('.nav')
    var as = nav.querySelectorAll('a')
    var nav_two = document.querySelector('.nav_two')
    var nav_one = document.querySelector('.nav_one')
    var tlis = nav_two.querySelectorAll('a')
    var olis = nav_one.querySelectorAll('a')
    xin.addEventListener('click', function () {
        fqiye.style.display = 'none'
        fxin.style.display = 'block'
        xin.style.border = '1px solid pink'
        xin.style.borderBottom = '0px'
        xin.style.backgroundColor = "white"
        qiye.style.border = '0px'
        qiye.style.backgroundColor = "rgb(207, 204, 204)"
    })
    qiye.addEventListener('click', function () {
        fqiye.style.display = 'block'
        fxin.style.display = 'none'
        qiye.style.border = '1px solid pink'
        qiye.style.borderBottom = '0px'
        qiye.style.backgroundColor = "white"
        xin.style.border = '0px'
        xin.style.backgroundColor = "rgb(207, 204, 204)"
    })
    for (var i = 0; i < as.length; i++) {
        as[i].addEventListener('mouseover', function () {
            for (var i = 0; i < as.length; i++) {
                as[i].style.color = 'black'
                as[i].style.textDecoration = 'none'
            }
            this.style.color = 'red'
            this.style.textDecoration = 'underline'
        })
    }
    for (var i = 0; i < as.length; i++) {
        as[i].addEventListener('mouseout', function () {
            this.style.color = 'black'
            this.style.textDecoration = 'none'
        })
    }
    as[2].addEventListener('mouseover', function () {
        nav_two.style.display = 'block'
        this.parentNode.style.border = '1px solid red'
        this.parentNode.style.borderBottom = '0px '
        nav_two.style.border = '1px solid red'
        nav_two.style.borderTop = '0px'
    })
    as[2].addEventListener('mouseout', function () {
        nav_two.style.display = 'none'
        this.parentNode.style.border = '0px '
    })
    nav_two.addEventListener('mouseover', function () {
        nav_two.style.display = 'block'
        as[2].parentNode.style.border = '1px solid red'
        as[2].parentNode.style.borderBottom = '0px'
        for (var i = 0; i < tlis.length; i++) {
            tlis[i].addEventListener('mousemove', function () {
                for (var i = 0; i < tlis.length; i++) {
                    tlis[i].style.color = 'black'
                }
                this.style.color = 'red'
            })

        }
    })
    nav_two.addEventListener('mouseout', function () {
        nav_two.style.display = 'none'
        as[2].parentNode.style.border = '0px'
        for (var i = 0; i < tlis.length; i++) {
            tlis[i].style.color = 'black'
        }
    })
    as[3].addEventListener('mouseover', function () {
        nav_one.style.display = 'block'
        this.parentNode.style.border = '1px solid red'
        this.parentNode.style.borderBottom = '0px '
        nav_one.style.border = '1px solid red'
        nav_one.style.borderTop = '0px'
    })
    as[3].addEventListener('mouseout', function () {
        nav_one.style.display = 'none'
        this.parentNode.style.border = '0px '
    })
    nav_one.addEventListener('mouseover', function () {
        nav_one.style.display = 'block'
        as[3].parentNode.style.border = '1px solid red'
        as[3].parentNode.style.borderBottom = '0px'
        for (var i = 0; i < olis.length; i++) {
            olis[i].addEventListener('mousemove', function () {
                for (var i = 0; i < olis.length; i++) {
                    olis[i].style.color = 'black'
                }
                this.style.color = 'red'
            })

        }
    })
    nav_one.addEventListener('mouseout', function () {
        nav_one.style.display = 'none'
        as[3].parentNode.style.border = '0px'
        for (var i = 0; i < olis.length; i++) {
            olis[i].style.color = 'black'
        }
    })
    var one = document.querySelector('.one')
    var username = document.querySelector('.username')
    var two = document.querySelector('.two')
    var password = document.querySelector('.password')
    var three = document.querySelector('.three')
    var agin_password = document.querySelector('.agin_password')
    var four = document.querySelector('.four')
    var company_name = document.querySelector('.company_name')
    var five = document.querySelector('.five')
    var company_address = document.querySelector('.company_address')
    var six = document.querySelector('.six')
    var company_email = document.querySelector('.company_email')
    var seven = document.querySelector('.seven')
    var lianxiren = document.querySelector('.lianxiren')
    var eight = document.querySelector('.eight')
    var tel = document.querySelector('.tel')
    var nine = document.querySelector('.nine')
    var input_width = document.querySelector('.input_width')
    var one_ = document.querySelector('.one_')
    var one__ = document.querySelector('.one__')
    var one___ = document.querySelector('.one___')
    var seg = /^[0-9]{4,20}$/
    var segg = /^[\da-z\u4E00-\u9FA5]{4,20}$/
    // var seg = / ^[0-9]{4,20}$ / 不能加空格
    // console.log(seg.test('12344'))
    console.log(one.parentNode.children[6])
    username.addEventListener('focus', function () {
        one.style.display = 'block'
        one_.style.display = 'none'
        one__.style.display = 'none'
        one___.style.display = 'none'
        one.parentNode.children[6].style.display = 'none'
        if (username.value.length > 20) {
            username.value = username.value.substr(0, 20)
        }
    })
    username.addEventListener('blur', function () {
        one.style.display = 'none'
        if (username.value.length < 4) {
            if (username.value !== '') {
                one_.style.display = 'block'
            }
        } else if ((seg.test(username.value))) {
            one__.style.display = 'block'
        } else if (!(segg.test(username.value))) {
            if (username.value !== '') {
                one___.style.display = 'block'
            }
        } else {
            one.parentNode.children[6].style.display = 'block'
        }
    })
    password.addEventListener('focus', function () {
        two.style.display = 'block'
    })
    password.addEventListener('blur', function () {
        two.style.display = 'none'
    })
    agin_password.addEventListener('focus', function () {
        three.style.display = 'block'
    })
    agin_password.addEventListener('blur', function () {
        three.style.display = 'none'
    })
    company_name.addEventListener('focus', function () {
        four.style.display = 'block'
    })
    company_name.addEventListener('blur', function () {
        four.style.display = 'none'
    })
    company_address.addEventListener('focus', function () {
        five.style.display = 'block'
    })
    company_address.addEventListener('blur', function () {
        five.style.display = 'none'
    })
    company_email.addEventListener('focus', function () {
        six.style.display = 'block'
    })
    company_email.addEventListener('blur', function () {
        six.style.display = 'none'
    })
    lianxiren.addEventListener('focus', function () {
        seven.style.display = 'block'
    })
    lianxiren.addEventListener('blur', function () {
        seven.style.display = 'none'
    })
    tel.addEventListener('focus', function () {
        eight.style.display = 'block'
    })
    tel.addEventListener('blur', function () {
        eight.style.display = 'none'
    })
    input_width.addEventListener('focus', function () {
        nine.style.display = 'block'
    })
    input_width.addEventListener('blur', function () {
        nine.style.display = 'none'
    })
})