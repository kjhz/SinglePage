(function () {
    'use strict';
    /* 手机端导航栏的滑动效果 */
    $("#menu button.navbar-toggle").click(function () {
        $("#menu div.navbar-collapse").slideToggle("fast");
    });

    $('a.page-scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 900);
                return false;
            }
        }
    });

    /* 滑动图片 */
    const sliderImages = document.querySelectorAll('.slide-in');
    function checkSlide(e) {
        const clientHeight = window.innerHeight;

        sliderImages.forEach(sliderimage => {
            // 取得元素的的位置和高度
            let box = sliderimage.getBoundingClientRect();

            //元素出现在视窗时执行滑动效果
            if ((box.top + box.height < clientHeight) && box.top > 0) {
                sliderimage.classList.add('active');
            } else {
                sliderimage.classList.remove('active');
            }
        });
    }
    // 监听滚动
    window.addEventListener('scroll', checkSlide);
})();

