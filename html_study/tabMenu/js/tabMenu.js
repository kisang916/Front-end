const tabsE1=document.querySelectorAll('.tab')
/* 웹페이지에서 -전부다선택해라 - tab 클래스를 전부다선택
tabsE1이라는변수에 넣는다
*/
const contentsE1=document.querySelectorAll('.content');

/* tab 을 인덱스 0번에 넣는다 
여기서 tab active는 tab도 있고 acitve라는 클래스 
2개가있는것
*/
/* eventlistener는 누른것을 감지
*/
tabsE1.forEach( function( tab,index ) {

    tab.addEventListener("click",function(){

        /* 들어온것들중에서 클릭되면 active에있는것을지움 */
        tabsE1.forEach(function(tab){
        tab.classList.remove("active");
    });
        
        contentsE1.forEach(function(content) {
            content.classList.remove('active');
        });

        /* 현재내가 누른애가 this임 갤러리면 갤러리가 this */
        this.classList.add('active');
        contentsE1[index].classList.add('active');
        
    });
});

