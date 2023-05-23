const sneaker = document.getElementById("txt-q-bball");
const jersey = document.getElementById("txt-q-jersey");
const supplement = document.getElementById("txt-q-power");
const estimate = document.getElementById("txt-estimate");

const btnEstimate = document.getElementById("btn-estimate");

addEventListener("DOMContentLoaded", () => {
    let sneakerPrice = 0,
        jerseyPrice = 0,
        supplementPrice = 0,
        ship = 0;
    sneaker.addEventListener("change", (e) => {
        sneakerPrice = e.target.value;
    });

    jersey.addEventListener("change", (e) => {
        jerseyPrice = e.target.value;
    });

    supplement.addEventListener("change", (e) => {
        supplementPrice = e.target.value;
    });

    document.querySelectorAll("input[type=radio]").forEach((e, i) => {
        e.addEventListener("change", (eRadioBtn) => {
            console.log(eRadioBtn.target.checked, i);
            if (i == 0) ship = 0;
            if (i == 1) ship = 2;
            if (i == 2) ship = 3;
        });
    });

    btnEstimate.addEventListener("click", (e) => {
        e.preventDefault();
        let price =
            Number(sneakerPrice) * 90 +
            Number(jerseyPrice) * 25 +
            Number(supplementPrice) * 30 +
            ship;
        // console.log(price);
        estimate.value = `$${price}`;
        // btnEstimate.disabled = true;
        estimate.disabled = true;
    });
});

// chrome dev tool
