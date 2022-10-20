const info = document.getElementById("info");
const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const cookieClickMultiplier = document.getElementById("cookieClickMultiplier");
const cookieClickMultiplier2 = document.getElementById("cookieClickMultiplier2");
const autoClickerButton = document.getElementById("autoClickerButton");

let numberOfCookies = 0;
let cookieIncrease = 1;

let autoClickerPrice = 100;
let autoClickerIncrease = 0;

cookie.onclick = () => {
    numberOfCookies += cookieIncrease;
    counter.innerHTML = numberOfCookies;
}

cookieClickMultiplier.onclick = () => {
    if (numberOfCookies >= 50) {
        numberOfCookies -= 50; // numberOfCookies = numberOfCookies - 50;
        cookieIncrease++;
        counter.innerHTML = numberOfCookies;
        let t = cookieIncrease - 1;
        info.innerHTML = `You bought a new upgrade with turbo ${t}x`;
    }
}

autoClickerButton.onclick = () => {
    if (numberOfCookies >= autoClickerPrice) {
        numberOfCookies -= autoClickerPrice;
        counter.innerHTML = numberOfCookies;
        autoClickerPrice *= 2;
        autoClickerButton.innerHTML = `Buy Auto Clicker: ${autoClickerPrice}`;
        if (autoClickerIncrease == 0) {
            setInterval(() => {
                numberOfCookies += autoClickerIncrease;
                counter.innerHTML = numberOfCookies;
            }, 1000);
        }
        autoClickerIncrease += 5;
    }
}
