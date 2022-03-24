window.addEventListener('load', function () {
    var address = this.document.querySelector('.address')
    var promice = this.document.querySelector('.promice')
    var promice_span = promice.querySelector('span')
    var lis = promice.querySelectorAll('a')
    var nav_two = this.document.querySelector('.nav_two')
    var lis_ = nav_two.querySelectorAll('li')
    var nav_three = this.document.querySelector('.nav_three')
    var ul_three = nav_three.querySelector('ul')
    var lis_three = ul_three.querySelectorAll('li')
    var nav_four = this.document.querySelector('.nav_four')
    var ul_four = nav_four.querySelector('ul')
    var lis_four = ul_four.querySelectorAll('li')
    var nav_five = this.document.querySelector('.nav_five')
    var ul_five = nav_five.querySelector('ul')
    var lis_five = ul_five.querySelectorAll('li')
    var lt = address.querySelector('span')
    var quanbufenlei = this.document.querySelector('.quanbufenlei')
    var fenlei = this.document.querySelector('.fenlei')
    var nav_bottom = this.document.querySelector('.nav_bottom')
    var nav_lis = nav_bottom.querySelectorAll('li')
    var as = nav_bottom.querySelectorAll('a')
    var blaket_list = this.document.querySelector('.blaket_list')
    var spans = blaket_list.querySelectorAll('span')
    console.log(spans);
    var lis__ = blaket_list.querySelectorAll('li')
    var footer = this.document.querySelector('.footer')
    var span = footer.querySelectorAll('span')
    var input_text = this.document.querySelector('.input_text')
    address.addEventListener('mouseover', function () {
        promice.style.display = 'flex'
        address.classList = 'address bac'
        promice_span.style.display = 'block'
        lt.style.transform = 'rotate(90deg)'
    })
    address.addEventListener('mouseout', function () {
        promice.style.display = 'flex'
        address.classList = 'address'
        promice.style.display = 'none'
        lt.style.transform = 'rotate(-90deg)'
    })
    promice.addEventListener('mouseover', function () {
        promice.style.display = 'flex'
        promice_span.style.display = 'none'
    })
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseover', function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.color = '#646464'
            }
            this.style.color = 'red'
        })
    }
    promice.addEventListener('mouseout', function () {
        promice.style.display = 'none'
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.color = '#646464'
        }
    })
    for (var i = 0; i < lis_.length; i++) {
        lis_[i].addEventListener('mouseover', function () {
            for (var i = 0; i < lis_.length; i++) {
                lis_[i].style.color = '#646464'
            }
            this.style.color = 'red'
        })
    }
    for (var i = 0; i < lis_.length; i++) {
        lis_[i].addEventListener('mouseout', function () {
            this.style.color = '#646464'
        })
    }
    lis_[2].addEventListener('mouseover', function () {
        ul_five.style.display = 'block'
    })
    lis_[2].addEventListener('mouseout', function () {
        ul_five.addEventListener('mouseover', function () {
            lis_[2].style.color = 'red'
            ul_five.style.display = 'block'
            for (var i = 0; i < lis_five.length; i++) {
                lis_five[i].addEventListener('mouseover', function () {
                    for (var i = 0; i < lis_five.length; i++) {
                        lis_five[i].style.backgroundColor = 'white'
                    }
                    this.style.backgroundColor = '#f6f6f6'
                })
            }
        })
        ul_five.addEventListener('mouseout', function () {
            ul_five.style.display = 'none'
            lis_[2].style.color = '#646464'
        })
        ul_five.style.display = 'none'
    })
    lis_[4].addEventListener('mouseover', function () {
        ul_four.style.display = 'block'
        for (var i = 0; i < lis_four.length; i++) {
            lis_four[i].addEventListener('mouseover', function () {
                for (var i = 0; i < lis_four.length; i++) {
                    lis_four[i].style.backgroundColor = 'white'
                }
                this.style.backgroundColor = '#f6f6f6'
            })
        }
    })
    lis_[4].addEventListener('mouseout', function () {
        ul_four.addEventListener('mouseover', function () {
            lis_[4].style.color = 'red'
            ul_four.style.display = 'block'
        })
        ul_four.addEventListener('mouseout', function () {
            ul_four.style.display = 'none'
            lis_[4].style.color = '#646464'
        })
        ul_four.style.display = 'none'
    })
    lis_[10].addEventListener('mouseover', function () {
        ul_three.style.display = 'block'
        for (var i = 0; i < lis_three.length; i++) {
            lis_three[i].addEventListener('mouseover', function () {
                for (var i = 0; i < lis_three.length; i++) {
                    lis_three[i].style.backgroundColor = 'white'
                }
                this.style.backgroundColor = '#f6f6f6'
            })
        }
    })
    lis_[10].addEventListener('mouseout', function () {
        ul_three.addEventListener('mouseover', function () {
            lis_[10].style.color = 'red'
            ul_three.style.display = 'block'
        })
        ul_three.addEventListener('mouseout', function () {
            ul_three.style.display = 'none'
            lis_[10].style.color = '#646464'
        })
        ul_three.style.display = 'none'
    })
    quanbufenlei.addEventListener('mouseover', function () {
        fenlei.style.display = 'block'
    })
    quanbufenlei.addEventListener('mouseout', function () {
        fenlei.addEventListener('mouseover', function () {
            fenlei.style.display = 'block'
        })
        fenlei.addEventListener('mouseout', function () {
            fenlei.style.display = 'none'
        })
        fenlei.style.display = 'none'
    })
    nav_lis[0].addEventListener('mouseover', function () {
        blaket_list.style.display = 'block'
    })
    nav_lis[0].addEventListener('mouseout', function () {
        blaket_list.addEventListener('mouseover', function () {
            blaket_list.style.display = 'block'
        })
        blaket_list.addEventListener('mouseout', function () {
            blaket_list.style.display = 'none'
        })
        blaket_list.style.display = 'none'
    })
    for (var i = 1; i < as.length; i++) {
        as[i].addEventListener('mouseover', function () {
            for (var i = 1; i < as.length; i++) {
                as[i].style.color = '#646464'
            }
            this.style.color = 'red'
        })
    }
    for (var i = 1; i < as.length; i++) {
        as[i].addEventListener('mouseout', function () {
            this.style.color = '#646464'
        })
    }
    for (var i = 0; i <= 2; i++) {
        var index = i * 52
        span[i].style.backgroundPosition = '0 -' + index + 'px'
    }
    var value = input_text.value
    input_text.addEventListener('focus', function () {
        if (input_text.value == value) {
            input_text.value = ''
        }
    })
    input_text.addEventListener('blur', function () {
        if (input_text.value.trim() == '') {
            input_text.value = value
        }
    })
    for (var i = 0; i < lis__.length; i++) {
        lis__[i].setAttribute('index', i)
        lis__[i].addEventListener('mouseover', function () {
            var index = this.getAttribute('index')
            spans[index].style.display = 'block'
            for (var i = 0; i < lis__.length; i++) {
                lis__[i].style.backgroundColor = 'white'
            }
            this.style.backgroundColor = '#cfcfcd'
        })
        lis__[i].addEventListener('mouseout', function () {
            var index = this.getAttribute('index')
            spans[index].style.display = 'none'
            for (var i = 0; i < lis__.length; i++) {
                lis__[i].style.backgroundColor = 'white'
            }
        })
    }
})
