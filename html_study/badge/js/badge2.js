const toTopEl=document.querySelector("#to-top");

window.addEventListener("scroll", 
   _.throttle(() => {
        if (window.scrollY > 300) {
          // 보이기 autoAlpha:1
          gsap.to(toTopEl, { duration: 0.6, y: 0, autoAlpha:1, ease:"back.out(1.7)"});
        } else {                            /* 위로화살표표시가 1.7배만큼 커졋다돌아온다 */
          // 숨기기 autoAlpha:0
          gsap.to(toTopEl, { duration: 0.6, y: 40, autoAlpha: 0 });
        }
      }, 300)
    )
    /* gspa은 애니메이션을해주는 라이브러리임 */

toTopEl.addEventListener( "click", ()=>{
    window.scrollTo({top:0, behavior:"smmoth"})
    /* 수평수직스크롤바 모두 */
})
