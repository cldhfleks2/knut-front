// 더보기 버튼을 클릭하면 모달이 생성되고 다시 클릭하면 모달이 사라짐
// 대신 화면의 다른 부분을 클릭해도 모달이 없어져야됨

const modal = document.querySelector("div.layer-action");

document.addEventListener("click", (e) => {
  if (e.target.closest("button.btn-more")) {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
});
