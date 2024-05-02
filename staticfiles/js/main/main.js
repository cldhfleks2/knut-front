// 로그인 했을 때 안했을 때 
const isLogin =           false              ;



//로그인 상태에따른 제공하는 서비스 제어
const loginservice = document.querySelectorAll(".loginservice.important"); //태그하나씩만 가져옴
const logoutservice = document.querySelectorAll(".logoutservice.important");
const loginservice2 = document.querySelectorAll(".loginservice"); //태그의 자식태그전부다 가져옴
const logoutservice2 = document.querySelectorAll(".logoutservice");
if(isLogin === true){ //로그인 했을때
    loginservice.forEach(e => { e.style.display = 'block'; });
    loginservice2.forEach(e => { e.style.display = 'block'; });
    logoutservice.forEach(e => { e.style.display = 'none'; });
    logoutservice2.forEach(e => { e.style.display = 'none'; });
}
else{ //로그인 안했을때
    loginservice.forEach(e => { e.style.display = 'none'; });
    loginservice2.forEach(e => { e.style.display = 'none'; });
    logoutservice.forEach(e => { e.style.display = 'block'; });
    logoutservice2.forEach(e => { e.style.display = 'block'; });
}

//사이드 메뉴바를 눌렀을때 켜지고 꺼지는것
const menuBtn = document.querySelector(".inner-first-btn")
const sideMenu = document.querySelector(".header-sidemenu.open")
const allSide = document.querySelector(".header-sidemenu")
document.addEventListener("click", (e)=>{
    if(e.target === menuBtn){
        sideMenu.style.marginLeft = '0px';
    }
    else if(!e.target.closest(".header-sidemenu")){
        sideMenu.style.marginLeft = '-261px';
    }
})

//메인 슬라이드의 다음/이전 버튼
const nextbtn = document.querySelector(".slide-next")
const prevbtn = document.querySelector(".slide-prev")
const slideUl = document.querySelector(".slide-area")
var xdegree = 0;
nextbtn.addEventListener("click",()=>{
    xdegree -= 500;
    if(xdegree === -500){ prevbtn.style.display = "block"; } 
    with (slideUl.style) {
        transform = `translateX(${xdegree}px)`;
        transition = "transform 0.3s ease 0s";
    }
    xdegree === -3000 ? (nextbtn.style.display = "none") : (nextbtn.style.display = "block");
});
prevbtn.addEventListener("click", (e) => {
    xdegree += 500;
    if(xdegree === 0){ prevbtn.style.display = "none"; };
    with (slideUl.style) {
        transform = `translateX(${xdegree}px)`;
        transition = "transform 0.3s ease 0s";
    }
    xdegree === -2500 && (nextbtn.style.display = "block");
});

//요일별 연재의 요일을 눌렀을때 
const weeksBtns = document.querySelectorAll(".link-tab"); 
weeksBtns.forEach(w => {
    w.addEventListener("click", (currentBtn) => {
        weeksBtns.forEach(btn => {
            btn.style.color = "#959595"; //다른 모든 요일의 색상을 리셋하고
            btn.classList.remove("on"); //클래스도 리셋
        });
        
        currentBtn.target.style.color = "#111"; //현재 요일에만 색상적용
        currentBtn.target.classList.add("on"); //클래스도 추가
    })
});

//요일별 연재의 정렬순서를 눌렀을때
const recentBtns = document.querySelectorAll(".filter-btn");
recentBtns.forEach(list => {
    list.addEventListener("click", (e) => {
        recentBtns.forEach(btn => { //최신순, 라이킷순에 붙은 on 클래스 전부 해제
            btn.classList.remove("on");
        })
        e.target.classList.add("on"); //그리고 현재 클릭한 정렬요소에 on 클래스 추가
    })
})




