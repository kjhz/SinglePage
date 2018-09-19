/* 手机端导航栏的滑动效果 */
$(document).ready(function () {
    $("#menu button.navbar-toggle").click(function () {
        $("#menu div.navbar-collapse").slideToggle("fast");
    });
});

/* 滑动图片 */
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    const clientHeight = window.innerHeight
        ,bottom = clientHeight * 0.2;

    sliderImages.forEach(sliderimage => {
        // 取得元素的的位置和高度
        let box = sliderimage.getBoundingClientRect();
        let offsetHeight = box.top + box.height + bottom;
        //元素出现在视窗时执行滑动效果
        if (offsetHeight < clientHeight) {
            sliderimage.classList.add('active');
        }
    });
}
// 监听滚动
window.addEventListener('scroll', checkSlide);