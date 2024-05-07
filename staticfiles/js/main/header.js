// 로그인 했을 때 안했을 때 
const isLogin =           true              ;

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
