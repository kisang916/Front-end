const promoEl=document.querySelector(".promo-badge");
const closeEl=document.querySelector(".close");
let isClosed = false; // 닫기 눌러있는지 판단 변수
let isShow = false; //지금 보이는 상태인지




window.addEventListener("scroll", 
   _.throttle(() => {/* false의 반대 !ishow (true) */
    if(isClosed) return;
    if (window.scrollY > 400 && !isShow) {
          // 보이기 autoAlpha:1
          isShow = true;
          gsap.to(promoEl, { duration: 0.7, scale:2, autoAlpha:1 , ease:"elastic.out(2.1)"});
        } else if( window.screenY <=400 && isShow) {                            /* 위로화살표표시가 1.7배만큼 커졋다돌아온다 */
          // 숨기기 autoAlpha:0
          isShow = false;
          gsap.to(promoEl, { duration: 0.4, scale: 0.5, autoAlpha: 0 });
        }
      }, 300)

  )

    /* gspa은 애니메이션을해주는 라이브러리임 */

closeEl.addEventListener( "click", ()=>{
  isClosed = true;
  gsap.to( promoEl,{duration:0.4, scale:0.5, autoAlpha:0});
    /* 수평수직스크롤바 모두 */
})
