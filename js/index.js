window.addEventListener('load', function () {
    var section = this.document.querySelector('section')
    var spans = section.querySelectorAll('.yan')
    var uls = section.querySelectorAll('ul')
    var lis = section.querySelectorAll('a')
    var blaket = this.document.querySelector('.blaket_right')
    var spans_ = blaket.querySelectorAll('.yan')
    var uls_ = blaket.querySelectorAll('ul')
    var lis_ = blaket.querySelectorAll('a')
    var index = 1;
    var timer = setInterval(function () {
        for (var i = 0; i < spans.length; i++) {
            spans[i].classList = ''
        }
        spans[index].classList = 'bgc'
        for (var i = 0; i < uls.length; i++) {
            uls[i].style.display = 'none'
        }
        uls[index].style.display = 'block'
        if (index < 1) {
            index++;
        } else if (index = 1) {
            index--;
        }
    }, 4000)
    var index_ = 1
    var timer_ = setInterval(function () {
        for (var i = 0; i < spans_.length; i++) {
            spans_[i].classList = ''
        }
        spans_[index_].classList = 'bgc'
        for (var i = 0; i < uls_.length; i++) {
            uls_[i].style.display = 'none'
        }
        uls_[index_].style.display = 'block'
        if (index_ < 1) {
            index_++;
        } else if (index_ = 1) {
            index_--;
        }
    }, 4000)
    for (var i = 0; i < spans.length; i++) {
        spans[i].setAttribute('index', i)
        spans[i].addEventListener('mouseover', function () {
            for (var i = 0; i < spans.length; i++) {
                spans[i].classList = ''
            }
            this.classList = 'bgc'
            var index = this.getAttribute('index')
            for (var i = 0; i < uls.length; i++) {
                uls[i].style.display = 'none'
            }
            uls[index].style.display = 'block'
            clearInterval(timer)
        })
        spans[i].addEventListener('mouseout', function () {
            timer = setInterval(function () {
                for (var i = 0; i < spans.length; i++) {
                    spans[i].classList = ''
                }
                spans[index].classList = 'bgc'
                for (var i = 0; i < uls.length; i++) {
                    uls[i].style.display = 'none'
                }
                uls[index].style.display = 'block'
                if (index < 1) {
                    index++;
                } else if (index = 1) {
                    index--;
                }
            }, 4000)
        })
    }
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseover', function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.color = '#646464'
            }
            this.style.color = 'red'
        })
        lis[i].addEventListener('mouseout', function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.color = '#646464'
            }
        })
    }
    for (var i = 0; i < spans_.length; i++) {
        spans_[i].setAttribute('index', i)
        spans_[i].addEventListener('mouseover', function () {
            for (var i = 0; i < spans_.length; i++) {
                spans_[i].classList = ''
            }
            this.classList = 'bgc'
            var index = this.getAttribute('index')
            for (var i = 0; i < uls_.length; i++) {
                uls_[i].style.display = 'none'
            }
            uls_[index].style.display = 'block'
            clearInterval(timer_)
        })
        spans_[i].addEventListener('mouseout', function () {
            timer_ = setInterval(function () {
                for (var i = 0; i < spans_.length; i++) {
                    spans_[i].classList = ''
                }
                spans_[index_].classList = 'bgc'
                for (var i = 0; i < uls_.length; i++) {
                    uls_[i].style.display = 'none'
                }
                uls_[index_].style.display = 'block'
                if (index_ < 1) {
                    index_++;
                } else if (index_ = 1) {
                    index_--;
                }
            }, 4000)
        })
    }
    for (var i = 0; i < lis_.length; i++) {
        lis_[i].addEventListener('mouseover', function () {
            for (var i = 0; i < lis_.length; i++) {
                lis_[i].style.color = '#646464'
            }
            this.style.color = 'red'
        })
        lis_[i].addEventListener('mouseout', function () {
            for (var i = 0; i < lis_.length; i++) {
                lis_[i].style.color = '#646464'
            }
        })
    }
    var row_right = this.document.querySelector('.row_right')
    var row_left = this.document.querySelector('.row_left')
    var blaket__ = this.document.querySelector('.blaket')
    var ul_one = blaket__.querySelectorAll('ul')
    blaket__.addEventListener('mouseover', function () {
        row_left.style.display = 'block'
        row_right.style.display = 'block'
    })
    blaket__.addEventListener('mouseout', function () {
        row_left.style.display = 'none'
        row_right.style.display = 'none'
    })
    var is = 0
    row_left.addEventListener('click', function () {
        if (is == 0) {
            ul_one[is].style.display = 'none'
            ul_one[is + 1].style.display = 'block'
            is++
        } else if (is == 1) {
            ul_one[is].style.display = 'none'
            ul_one[is - 1].style.display = 'block'
            is--
        }

    })
    row_right.addEventListener('click', function () {
        if (is == 0) {
            ul_one[is].style.display = 'none'
            ul_one[is + 1].style.display = 'block'
            is++
        } else if (is == 1) {
            ul_one[is].style.display = 'none'
            ul_one[is - 1].style.display = 'block'
            is--
        }
    })
    for (var i = 0; i < ul_one.length; i++) {
        ul_one[i].addEventListener('mouseover', function () {
            clearInterval(blaket_timer)
        })
        ul_one[i].addEventListener('mouseout', function () {
            blaket_timer = setInterval(function () {
                if (index__ == 0) {
                    ul_one[index__].style.display = 'none'
                    ul_one[index__ + 1].style.display = 'block'
                    index__++
                } else if (index__ == 1) {
                    ul_one[index__].style.display = 'none'
                    ul_one[index__ - 1].style.display = 'block'
                    index__--
                }
            }, 4000)
        })
    }
    var index__ = 0
    var blaket_timer = setInterval(function () {
        if (index__ == 0) {
            ul_one[index__].style.display = 'none'
            ul_one[index__ + 1].style.display = 'block'
            index__++
        } else if (index__ == 1) {
            ul_one[index__].style.display = 'none'
            ul_one[index__ - 1].style.display = 'block'
            index__--
        }
    }, 4000)
    //小轮播图制作
    var three = this.document.querySelector('.three')
    var ols = three.querySelector('.xiaolunbotu')
    var xiaolunbotu_lis = ols.querySelectorAll('li')
    var ol = this.document.querySelector('.xiaoyuandian')
    for (var i = 0; i < xiaolunbotu_lis.length; i++) {
        var li = this.document.createElement('li')
        ol.appendChild(li)
        li.setAttribute('index', i)
    }
    //克隆第一张照片
    var li_first = ols.children[0].cloneNode(true)
    ols.append(li_first)
    var img_width = xiaolunbotu_lis[0].children[0].offsetWidth
    var xiaoyuandian_lis = ol.querySelectorAll('li')
    for (var i = 0; i < xiaoyuandian_lis.length; i++) {
        xiaoyuandian_lis[i].addEventListener('click', function () {
            for (var i = 0; i < xiaoyuandian_lis.length; i++) {
                xiaoyuandian_lis[i].style.backgroundColor = '#cfcdcf'
            }
            this.style.backgroundColor = 'orange'
            // console.log(xiaolunbotu_lis)
            //点击小圆点切换图片
            var index = this.getAttribute('index')
            num = index
            cicle = index
            animate(ols, -index * (img_width + 4))
        })
    }
    var xiao_l = this.document.querySelector('.xiao_l')
    var xiao_r = this.document.querySelector('.xiao_r')
    three.addEventListener('mouseover', function () {
        xiao_l.style.display = 'block'
        xiao_r.style.display = 'block'
        clearInterval(lunbotu_timer)
        lunbotu_timer = null
    })
    three.addEventListener('mouseout', function () {
        xiao_l.style.display = 'none'
        xiao_r.style.display = 'none'
        lunbotu_timer = setInterval(function () {
            xiao_r.click()
        }, 4000)
    })
    var num = 0
    var cicle = 0
    var flag = true
    xiao_r.addEventListener('click', function () {
        if (flag) {
            flag = false
            num++
            cicle++
            if (num > 3) {
                num = 0
                num++
                ols.style.left = '-5px'
            }
            if (cicle > 2) {
                cicle = 0
            }
            for (var i = 0; i < xiaoyuandian_lis.length; i++) {
                xiaoyuandian_lis[i].style.backgroundColor = '#cfcdcf'
            }
            xiaoyuandian_lis[cicle].style.backgroundColor = 'orange'
            animate(ols, -num * (img_width + 4), function () {
                flag = true;
            })
        }
    })
    xiao_l.addEventListener('click', function () {
        if (flag) {
            flag = false
            num--
            cicle--
            if (num < 0) {
                ols.style.left = '-603px'
                num = 3
                num--

            }
            if (cicle < 0) {
                cicle = 2
            }
            for (var i = 0; i < xiaoyuandian_lis.length; i++) {
                xiaoyuandian_lis[i].style.backgroundColor = '#cfcdcf'
            }
            xiaoyuandian_lis[cicle].style.backgroundColor = 'orange'
            animate(ols, -num * (img_width + 4), function () {
                flag = true;
            })
        }
    })
    var lunbotu_timer = setInterval(function () {
        xiao_r.click()
    }, 4000)
    var dalunbotu_l = this.document.querySelector('.dalunbotu_l')
    var dalunbotu_r = this.document.querySelector('.dalunbotu_r')
    var dalunbotu = this.document.querySelector('.dalunbotu')
    var da_ul = dalunbotu.querySelector('ul')
    dalunbotu.addEventListener('mouseover', function () {
        dalunbotu_l.style.display = 'block'
        dalunbotu_r.style.display = 'block'
        clearInterval(dalun_timer)
    })
    dalunbotu.addEventListener('mouseout', function () {
        dalunbotu_l.style.display = 'none'
        dalunbotu_r.style.display = 'none'
        dalun_timer = setInterval(function () {
            dalunbotu_r.click()
        }, 4000)
    })
    var dalun_index = 0
    var da_width = dalunbotu.offsetWidth
    dalunbotu_r.addEventListener('click', function () {
        if (dalun_index > 5) {
            dalun_index = 0
            da_ul.style.left = '0px'
        }
        dalun_index++
        animate(da_ul, -dalun_index * da_width)
    })
    dalunbotu_l.addEventListener('click', function () {
        if (dalun_index <= 0) {
            dalun_index = 6
            da_ul.style.left = '-4776px'
        }
        dalun_index--
        animate(da_ul, -dalun_index * da_width)
    })
    var dalun_timer = setInterval(function () {
        dalunbotu_r.click()
    }, 4000)
    //倒计时效果
    var hour = document.querySelector('.hour');
    var minutes = document.querySelector('.minutes');
    var second = document.querySelector('.second');
    var inputtime = +new Date('2023-5-1 18:00:00');
    countdown()
    //开启定时器
    setInterval(countdown, 1000);
    function countdown() {
        var time = +new Date();
        var times = (inputtime - time) / 1000;
        var h = parseInt(times / 60 / 60 % 24);
        h = h < 10 ? '0' + h : h;
        hour.innerHTML = h;
        var m = parseInt(times / 60 % 60);
        m = m < 10 ? '0' + m : m;
        minutes.innerHTML = m;
        var s = parseInt(times % 60);
        s = s < 10 ? '0' + s : s;
        second.innerHTML = s;
    }
    var fixed_part = this.document.querySelector('.fixed_part')
    var lis_part = fixed_part.querySelectorAll('li')
    var spans_part = fixed_part.querySelectorAll('span')
    for (var i = 0; i < lis_part.length - 1; i++) {
        lis_part[i].style.backgroundPosition = '0 -' + i * 35 + 'px'
        lis_part[i].addEventListener('mouseover', function () {
            this.style.backgroundPositionX = '-40px'
        })
    }
    for (var i = 0; i < lis_part.length; i++) {
        lis_part[i].addEventListener('mouseover', function () {
            for (var i = 0; i < lis_part.length; i++) {
                lis_part[i].style.backgroundPositionX = '0px'
                spans_part[i].style.display = 'none'
            }
            this.style.backgroundPositionX = '-40px'
            this.children[1].style.display = 'block'
        })
    }
    for (var i = 0; i < spans_part.length; i++) {
        spans_part[i].style.top = i * 35 + 'px'
    }
    for (var i = 0; i < lis_part.length; i++) {
        lis_part[i].addEventListener('mouseout', function () {
            for (var i = 0; i < lis_part.length; i++) {
                lis_part[i].style.backgroundPositionX = '0px'
                spans_part[i].style.display = 'none'
            }
        })
    }
    var qianggou = this.document.querySelector('.qianggou')
    var qianggou_offsetTop = qianggou.offsetTop
    var top_serch = this.document.querySelector('.top_serch')
    this.document.addEventListener('scroll', function () {
        if (window.pageYOffset >= qianggou_offsetTop) {
            top_serch.style.display = 'block'
        }
        if (window.pageYOffset < qianggou_offsetTop) {
            top_serch.style.display = 'none'
        }
    })
    var input = top_serch.querySelector('input')
    var test = input.value
    input.addEventListener('focus', function () {
        if (this.value == test) {
            this.value = ''
        }
    })
    input.addEventListener('blur', function () {
        if (this.value.trim() == '') {
            this.value = test
        }
    })
    var book_right_bottom = this.document.querySelector('.book_right_bottom')
    var book_lis = book_right_bottom.querySelectorAll('li')
    var book_right_top = this.document.querySelector('.book_right_top')
    var span_color = book_right_top.querySelectorAll('span')
    var sapn_uls = book_right_bottom.querySelectorAll('ul')
    for (var i = 0; i < book_lis.length; i++) {
        book_lis[i].addEventListener('mouseover', function () {
            for (var i = 0; i < book_lis.length; i++) {
                book_lis[i].style.height = '30px'
                book_lis[i].children[1].style.display = 'block'
                book_lis[i].children[2].style.display = 'none'
                book_lis[i].children[3].style.display = 'none'
                book_lis[i].children[0].style.display = 'none'

            }
            this.style.height = '150px'
            this.children[0].style.display = 'block'
            this.children[1].style.display = 'none'
            this.children[2].style.display = 'block'
            this.children[3].style.display = 'block'
        })
    }
    for (var i = 0; i < span_color.length; i++) {
        span_color[i].setAttribute('index', i)
        span_color[i].addEventListener('mouseover', function () {
            for (var i = 0; i < span_color.length; i++) {
                span_color[i].classList = ''
                span_color[i].children[0].style.color = '#646464'
            }
            for (var i = 0; i < sapn_uls.length; i++) {
                sapn_uls[i].style.display = 'none'
            }
            var index = this.getAttribute('index')
            sapn_uls[index].style.display = 'block'
            this.classList = 'span_color'
            this.children[0].style.color = 'white'
        })
    }
})