const subscribeBtns = document.querySelectorAll(".subscribe-button");
const subscribeCancelModal = document.querySelector(
  ".subscriber-realmain-modalWrap"
);
const modalBlack = document.querySelector(".modal-black");
const realBtns = document.querySelectorAll(".continue-button");

subscribeBtns.forEach((subscribebtn) => {
  subscribebtn.addEventListener("click", () => {
    if (subscribebtn.innerText === "구독하기") {
      subscribebtn.style.backgroundColor = "#00c6be";
      subscribebtn.style.color = "#fff";
      subscribebtn.innerText = "구독중";
    } else {
      subscribeCancelModal.style.display = "block";
      modalBlack.style.display = "block";
      document.body.classList.add("modal-open");
      realBtns.forEach((realbtn) => {
        realbtn.addEventListener("click", (e) => {
          if (e.target.innerText === "계속 구독하기") {
            subscribeCancelModal.style.display = "none";
            modalBlack.style.display = "none";
            document.body.classList.remove("modal-open");
          } else if (e.target.innerText === "구독 취소하기") {
            subscribeCancelModal.style.display = "none";
            modalBlack.style.display = "none";
            document.body.classList.remove("modal-open");
            subscribebtn.style.backgroundColor = "#fff";
            subscribebtn.style.color = "#00c6be";
            subscribebtn.innerText = "구독하기";
          }
        });
      });
    }
  });
});

subscribeBtns.forEach((subscribeBtn, index) => {
  subscribeBtn.addEventListener("mouseover", (e) => {
    if (e.target.innerText === "구독중") {
      e.target.innerText = "구독취소";
    }
  });

  subscribeBtn.addEventListener("mouseout", (e) => {
    if (e.target.innerText === "구독취소") {
      e.target.innerText = "구독중";
    }
  });
});
