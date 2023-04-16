var infoModal = document.querySelector(".modal.buy-first-step");
var paymentModal = document.querySelector(".modal.buy-payment-step");
var successModal = document.querySelector(".modal.buy-success-step");

var firstTriggers = document.querySelectorAll(".buy-now");

var closeButtons = document.querySelectorAll(".close-button");

var infoSubmit = document.querySelector("#infoSubmit");
var paymentSubmit = document.querySelector("#paymentSubmit");
var successPaymentDoneBtn = document.querySelector("#successPaymentDoneBtn");

for (var i = 0, len = firstTriggers.length; i < len; i++) {
	firstTriggers[i].addEventListener("click", toggleFirstModal);
}

closeButtons[0].addEventListener("click", toggleFirstModal);
closeButtons[1].addEventListener("click", togglePaymentModal);
closeButtons[2].addEventListener("click", toggleSuccessModal);
successPaymentDoneBtn.addEventListener("click", toggleSuccessModal);

infoSubmit.addEventListener("click", function (e) {
	e.preventDefault();
	toggleFirstModal();
	togglePaymentModal();
});

paymentSubmit.addEventListener("click", function (e) {
	e.preventDefault();
	togglePaymentModal();
	toggleSuccessModal();
});

function toggleFirstModal() {
	infoModal.classList.toggle("show-modal");
}

function togglePaymentModal() {
	paymentModal.classList.toggle("show-modal");
}

function toggleSuccessModal() {
	successModal.classList.toggle("show-modal");
}
