let mousePrevX = 0;

window.onload = () => {
    const death = document.getElementById("death");
    const cookie = document.getElementById("cookie");
    const counter = document.getElementById("counter");
    const cookieClickMultiplier = document.getElementById("cookieClickMultiplier");
    const autoClickerButton = document.getElementById("autoClickerButton");
    
    let numberOfCookies = 0;
    let cookieIncrease = 1;

    let clickerUpgradePrice = 50;
    
    let autoClickerPrice = 100;
    let autoClickerIncrease = 0;
    
    cookie.onclick = () => {
        numberOfCookies += cookieIncrease;
        counter.innerHTML = numberOfCookies;
    }

    cookie.addEventListener("mousedown", () => {
        cookie.style.backgroundPosition = "0 101%, center";
        death.style.opacity = 1;
    });

    cookie.addEventListener("mouseup", () => {
        cookie.style.backgroundPosition = "0 0%, center";
        death.style.opacity = 0;
    });

    
    cookieClickMultiplier.onclick = () => {
        if (numberOfCookies >= clickerUpgradePrice) {
            numberOfCookies -= clickerUpgradePrice; // numberOfCookies = numberOfCookies - 50;
            clickerUpgradePrice += 50;
            cookieClickMultiplier.innerText = `Buy upgrade: ${clickerUpgradePrice}`;
            cookieIncrease += 5;
            counter.innerHTML = numberOfCookies;
        }
    }
    
    autoClickerButton.onclick = () => {
        if (numberOfCookies >= autoClickerPrice) {
            numberOfCookies -= autoClickerPrice;
            counter.innerHTML = numberOfCookies;
            autoClickerPrice *= 2;
            autoClickerButton.innerHTML = `Buy Auto killer: ${autoClickerPrice}`;
            if (autoClickerIncrease == 0) {
                setInterval(() => {
                    numberOfCookies += autoClickerIncrease;
                    counter.innerHTML = numberOfCookies;
                }, 1000);
            }
            autoClickerIncrease += 5;
        }
    }

    document.body.addEventListener("mousemove", (e) => {
        if (mousePrevX == 0) return mousePrevX = e.clientX;
        if (e.clientX > mousePrevX) {
            document.body.style.cursor = `url("./res/img/ghostRight.png") 32 32, auto`;
            mousePrevX = e.clientX;
        } else if (e.clientX < mousePrevX) {
            document.body.style.cursor = `url("./res/img/ghostLeft.png") 32 32, auto`;
            mousePrevX = e.clientX;
        }
    });
}