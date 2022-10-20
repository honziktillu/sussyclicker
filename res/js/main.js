let mousePrevX = 0;

window.onload = () => {
    const info = document.getElementById("info");
    const cookie = document.getElementById("cookie");
    const counter = document.getElementById("counter");
    const cookieClickMultiplier = document.getElementById("cookieClickMultiplier");
    const autoClickerButton = document.getElementById("autoClickerButton");
    
    let numberOfCookies = 0;
    let cookieIncrease = 1;
    
    let autoClickerPrice = 100;
    let autoClickerIncrease = 0;
    
    cookie.onclick = () => {
        numberOfCookies += cookieIncrease;
        counter.innerHTML = numberOfCookies;
    }

    cookie.addEventListener("mousedown", () => {
        cookie.style.backgroundPosition = "0 101%, center";
    });

    cookie.addEventListener("mouseup", () => {
        cookie.style.backgroundPosition = "0 0%, center";
    });

    
    cookieClickMultiplier.onclick = () => {
        if (numberOfCookies >= 50) {
            numberOfCookies -= 50; // numberOfCookies = numberOfCookies - 50;
            cookieIncrease++;
            counter.innerHTML = numberOfCookies;
            let t = cookieIncrease - 1;
            info.innerHTML = `Upgrade bought ${t}x`;
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
            document.body.style.cursor = `url("./res/img/ghostRight.png") 32 0, auto`;
            mousePrevX = e.clientX;
        } else if (e.clientX < mousePrevX) {
            document.body.style.cursor = `url("./res/img/ghostLeft.png") 32 0, auto`;
            mousePrevX = e.clientX;
        }
    });
}