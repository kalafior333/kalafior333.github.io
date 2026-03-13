

//widok menu start - funkcja
function startView() {
    const contentBox = document.getElementById("content-of-content");
    contentBox.innerHTML = `<header class="pixel-panel">START</header> 
    <div id="index-content">
        <div class="menu-option">
            <img src="backgrounds/garage_back1.png" alt="garaż" class="opcja_zdj">
            <div class="pixel-button" onclick="garageView()">GARAGE</div>
        </div>
        <div class="menu-option">
            <img src="backgrounds/shop_back.jpeg" alt="sklep" class="opcja_zdj">
            <div class="pixel-button" onclick="marketView()">MARKET</div>
        </div>
        <div class="menu-option">
            <img src="backgrounds/race_back.png" alt="zadania" class="opcja_zdj">
            <div class="pixel-button" onclick="raceView()">RACE</div>
        </div>
    </div>
    <div id="help" class="pixel-button" onclick="showHelp()">?</div>`
}
//widok garażu - funkcja
function garageView() {
   const contentBox = document.getElementById("content-of-content");
   contentBox.innerHTML = `<header class="pixel-panel">GARAGE</header>
    <div id="count-garage" class="pixel-button">880999$</div>
    <a id="return" class="pixel-button" onclick="startView()"><-</a>
    <div id="content-garage">
        <img alt="car" id="garage-pht-car">
        <div id="garage-tech" class="pixel-panel"></div>
        <div id="tuning" class="pixel-button" onclick="tuningView()">Tuning</div>
        <div id="sell" class="pixel-button" onclick="sellCarView()">Sell</div>
        <div id="garage-controls">
            <div id="arrow-left" class="pixel-button" onclick="leftCar()"><</div>
            <div id="garage-car-name" class="pixel-panel"></div>
            <div id="arrow-right" class="pixel-button" onclick="rigthCar()">></div>
        </div>
    </div>`
    startMoney();
    updateMoneyDisplay();
    carsInGarage();
}
function raceView() {
    const contentBox = document.getElementById("content-of-content");
   contentBox.innerHTML = `<header class="pixel-panel">RACE</header>
    <div id="count-garage" class="pixel-button"></div>
    <a id="return" class="pixel-button" onclick="startView()"><-</a>
    <div id="content-race">
        <img alt="car" id="garage-pht-car">
        <div id="garage-tech" class="pixel-panel"></div>
        <div id="tuning" class="pixel-button" onclick="raceSystem()">START RACE</div>
        <div id="garage-controls">
            <div id="arrow-left" class="pixel-button" onclick="leftRace()"><</div>
            <div id="garage-car-name" class="pixel-panel">Porsche 911</div>
            <div id="arrow-right" class="pixel-button" onclick="rightRace()">></div>
        </div>
    </div>`
    startMoney();
    updateMoneyDisplay();
    raceInRace();
}
//widok marketu - funkcja
function marketView() {
    const contentBox = document.getElementById("content-of-content");
    contentBox.innerHTML = ` <header class="pixel-panel">MARKET</header>
    <div id="count-market" class="pixel-button">880999$</div>
    <div id="refresh" class="pixel-button">REFRESH</div>
    <a id="return" class="pixel-button" onclick="startView()"><-</a>
    <div id="content-market">
        <div class="sell-info hidden" id="sell-info-0">
            <img alt="car1" class="sell-pht">
            <div class="sell-tech pixel-panel">
                <div>INFO</div>
                <div class="tech-info"></div>
            </div>
            <div class="sell-napis pixel-button"></div>
        </div>
        <div class="sell-info hidden" id="sell-info-1">
            <img alt="car2" class="sell-pht">
            <div class="sell-tech pixel-panel">
                <div>INFO</div>
                <div class="tech-info"></div>
            </div>
            <div class="sell-napis pixel-button"></div>
        </div>
        <div class="sell-info hidden" id="sell-info-2">
            <img alt="car3" class="sell-pht">
            <div class="sell-tech pixel-panel">
                <div>INFO</div>
                <div class="tech-info"></div>
            </div>
            <div class="sell-napis pixel-button"></div>
        </div>
        <div class="sell-info hidden" id="sell-info-3">
            <img alt="car4" class="sell-pht">
            <div class="sell-tech pixel-panel">
                <div>INFO</div>
                <div class="tech-info"></div>
            </div>
            <div class="sell-napis pixel-button"></div>
        </div>
        <div class="sell-info hidden" id="sell-info-4">
            <img alt="car5" class="sell-pht">
            <div class="sell-tech pixel-panel">
                <div>INFO</div>
                <div class="tech-info"></div>
            </div>
            <div class="sell-napis pixel-button"></div>
        </div>
    </div>`
    salesOffers();
    const marketContainer = document.getElementById("content-market");
    if (marketContainer) {
        marketContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("sell-napis")) {
                const carIndex = Number(e.target.dataset.car);
                const container = e.target.closest(".sell-info");
                if (!container) return;
                buyCar(carIndex, container.id);
            }
        });
    }
    // odświeżenie marketu
    const refreshBtn = document.getElementById("refresh");
    if (refreshBtn) refreshBtn.addEventListener("click", marketRefresh); // odświeża market
    startMoney();
    updateMoneyDisplay();
}
function marketRefresh() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  salesOffers();
}
//podstawowe informacje o samochodach
const basicCarInfo = [
    {
        id: 0,
        brand: "Nissan",
        model: "GTR r34",
        class: "COMMON",
        type: "SPORT",
        basicPower: 300,
        year: 1990,
        minPrice: 3000,
        maxPrice: 10000,
        photoPath: "cars/0.png"
    },
    {
        id: 1,
        brand: "Land Rover",
        model: "Discovery",
        class: "RARE",
        type: "RALLY",
        basicPower: 340,
        year: 2000,
        minPrice: 40000,
        maxPrice: 70000,
        photoPath: "cars/1.png"
    },
    {
        id: 2,
        brand: "Jaguar",
        model: "F-type",
        class: "ULTRA RARE",
        type: "COUPE",
        basicPower: 500,
        year: 2015,
        minPrice: 70000,
        maxPrice: 170000,
        photoPath: "cars/2.png"
    },
    {
        id: 3,
        brand: "Lancia",
        model: "Delta",
        class: "EPIC",
        type: "RALLY",
        basicPower: 100,
        year: 1987,
        minPrice: 7000,
        maxPrice: 50000,
        photoPath: "cars/3.png"
    },
    {
        id: 4,
        brand: "Porsche",
        model: "911",
        class: "EPIC",
        type: "SPORT",
        basicPower: 530,
        year: 1995,
        minPrice: 100000,
        maxPrice: 170000,
        photoPath: "cars/4.png"
    },
    {
        id: 5,
        brand: "BMW",
        model: "X5M",
        class: "VERY RARE",
        type: "LIMUSINE",
        basicPower: 900,
        year: 1996,
        minPrice: 99000,
        maxPrice: 340000,
        photoPath: "cars/5.png"
    }, 
    {
        id: 6,
        brand: "Volvo",
        model: "XC90",
        class: "VERY RARE",
        type: "LIMUSINE",
        basicPower: 250,
        year: 2022,
        minPrice: 70000,
        maxPrice: 100000,
        photoPath: "cars/6.png"
    },
    {
        id: 7,
        brand: "Dodge",
        model: "Challenger",
        class: "COMMON",
        type: "MUSCLE",
        basicPower: 170,
        year: 1970,
        minPrice: 5000,
        maxPrice: 20000,
        photoPath: "cars/7.png"
    },
    {
        id: 8,
        brand: "Hyundai",
        model: "i30 N",
        class: "RARE",
        type: "HOT HATCH",
        basicPower: 190,
        year: 2021,
        minPrice: 17000,
        maxPrice: 30000,
        photoPath: "cars/8.png"
    },
    {
        id: 9,
        brand: "Skoda",
        model: "Octavia vrs",
        class: "EPIC",
        type: "SPORT",
        basicPower: 199,
        year: 2023,
        minPrice: 50000,
        maxPrice: 58000,
        photoPath: "cars/9.png"
    },
    {
        id: 10,
        brand: "Volkswagen",
        model: "Golf gti",
        class: "COMMON",
        type: "HOT HATCH",
        basicPower: 199,
        year: 2015,
        minPrice: 12000,
        maxPrice: 20000,
        photoPath: "cars/10.png"
    },
    {
        id: 11,
        brand: "Mercedes",
        model: "500e",
        class: "ULTRA RARE",
        type: "LIMUSINE",
        basicPower: 167,
        year: 1991,
        minPrice: 12000,
        maxPrice: 200000,
        photoPath: "cars/11.png"
    },
    {
        id: 12,
        brand: "Pagani",
        model: "Zonda",
        class: "LEGENDARY+",
        type: "HIPER CAR",
        basicPower: 515,
        year: 2014,
        minPrice: 1000000,
        maxPrice: 2000000,
        photoPath: "cars/12.png"
    },
    {
        id: 13,
        brand: "Alfa Romeo",
        model: "Gulia",
        class: "RARE",
        type: "SPORT",
        basicPower: 315,
        year: 2016,
        minPrice: 45000,
        maxPrice: 150000,
        photoPath: "cars/13.png"
    },
    {
        id: 14,
        brand: "Lamborghini",
        model: "Huracan",
        class: "ULTRA EPIC",
        type: "SPORT",
        basicPower: 515,
        year: 2015,
        minPrice: 175000,
        maxPrice: 300000,
        photoPath: "cars/14.png"
    },
    {
        id: 15,
        brand: "Mitsubishi",
        model: "Galant",
        class: "COMMON",
        type: "SEDAN",
        basicPower: 132,
        year: 1990,
        minPrice: 5000,
        maxPrice: 11000,
        photoPath: "cars/15.png"
    }

]
function salesOffers() {
    for (let i=0; i<=4; i++) {
    //losowanie auta
    let numberCar = Math.floor(Math.random() * basicCarInfo.length);
    const offerPlace = document.getElementById("sell-info-"+i);
    if (!offerPlace) continue;
    //losowanie i zapisanie ceny
    let generatedPrice = Math.floor(Math.random() * (basicCarInfo[numberCar].maxPrice - basicCarInfo[numberCar].minPrice + 1)) + basicCarInfo[numberCar].minPrice;
    generatedPrice = Math.ceil(generatedPrice / 100) * 100;
    const priceButton = offerPlace.querySelector(".sell-napis");
    priceButton.textContent = generatedPrice + "$";
    //zapisanie zdj
    const photo = offerPlace.querySelector(".sell-pht");
    photo.src = basicCarInfo[numberCar].photoPath;
    //zapisanie specyfikacji
    const techdata = offerPlace.querySelector(".tech-info");
    techdata.textContent =
        "BRAND: " + basicCarInfo[numberCar].brand + "\n" +
        "MODEL: " + basicCarInfo[numberCar].model + "\n \n" +
        "POWER: " + basicCarInfo[numberCar].basicPower + " HP\n" +
        "YEAR: " + basicCarInfo[numberCar].year + "\n \n" +
        "CLASS: " + basicCarInfo[numberCar].class + "\n" +
        "TYPE: " + basicCarInfo[numberCar].type;

    //wyswietlenie ogłoszenia
    offerPlace.classList.remove("hidden");
    offerPlace.classList.add("visible");
    //przypisanie indeksu auta do buttona kup
    priceButton.setAttribute("data-car", basicCarInfo[numberCar].id);

    }
}
function buyCar(carIndex, containerId) {
  const container = document.getElementById(containerId);
  const priceButton = container.querySelector(".sell-napis");
  const price = parseInt(priceButton.textContent.replace('$', ''));
  const currentMoney = getMoney();
  if (currentMoney < price) {
    popupWindow("You don't have enough money!");
    return;
  } else {
    document.getElementById(containerId).classList.remove("visible");
    document.getElementById(containerId).classList.add("hidden");
    setMoney(currentMoney - price);
    const damage = Math.floor(Math.random() * 9);
    const purchasedCar = {
      carId: carIndex, // tylko indeks auta z basicCarInfo
      uniqueId: Date.now() + Math.random(),// unikalny ID zakupu
      price: price,
      power: basicCarInfo.find(car => car.id === carIndex).basicPower,
      tuningEngine: 0,
      tuningTurbo: 0,
      tuningWheels: 0,
      priceGrowth: 0.85,
      damage: damage,
      softcap: false
    };
    updateMoneyDisplay();
    const purchasedCars = JSON.parse(localStorage.getItem("purchasedCars")) || [];
    purchasedCars.push(purchasedCar);
    localStorage.setItem("purchasedCars", JSON.stringify(purchasedCars));
    console.log("Zakupione auto:", purchasedCar);
    console.log("Lista wszystkich aut:", purchasedCars);
    popupWindow(`You bought this car for ${price}$`);
  }
}
function startMoney() {
  if (localStorage.getItem("playerMoney") === null) {
    localStorage.setItem("playerMoney", "15000");
  }
}
function getMoney() {
  return parseInt(localStorage.getItem("playerMoney")) || 100000;
}
function updateMoneyDisplay() {
  const market = document.getElementById("count-market");
  const garage = document.getElementById("count-garage");
  if (market) {
    market.textContent = getMoney() + "$";
  }
  if (garage) {
    garage.textContent = getMoney() + "$";
  }
}
function setMoney(amount) {
  localStorage.setItem("playerMoney", amount.toString());
  updateMoneyDisplay();
}
 
let curentCar = 0;

function carsInGarage() {
    const purchasedCars = JSON.parse(localStorage.getItem("purchasedCars")) || [];
    const photo = document.getElementById("garage-pht-car");
    const info = document.getElementById("garage-tech");
    const name = document.getElementById("garage-car-name");
    if (purchasedCars.length === 0) {
        photo.src = "backgrounds/garage_back.png";
        document.getElementById("garage-tech").textContent = "You don't have any cars in your garage.";
        document.getElementById("garage-car-name").textContent = "NO CAR";
        document.getElementById("arrow-left").style.visibility = "hidden";
        document.getElementById("arrow-right").style.visibility = "hidden"; 
        document.getElementById("tuning").style.visibility = "hidden";
        document.getElementById("sell").style.visibility = "hidden";
        return;
    } else {
        const firstCarId = purchasedCars[curentCar].carId;
        const carInfo = basicCarInfo.find(car => car.id === firstCarId); 
        if (!carInfo) return;
        name.textContent = carInfo.brand + " " + carInfo.model;
        info.textContent =
            "POWER: " + `${purchasedCars[curentCar].power}` + " HP\n\n" +
            "YEAR: " + carInfo.year + "\n\n" + 
            "VALUE: " + `${Math.floor(purchasedCars[curentCar].price * purchasedCars[curentCar].priceGrowth)}`  + "$\n\n" +
            "CLASS: " + carInfo.class + "\n\n" +
            "TYPE: " + carInfo.type;
        photo.src = carInfo.photoPath;
    }
    }   
function leftCar() {
    const purchasedCars = JSON.parse(localStorage.getItem("purchasedCars")) || [];
    if (curentCar > 0) {
        curentCar--;
        carsInGarage();
    } else {
        curentCar = purchasedCars.length - 1;
        carsInGarage();
    }
}   
function rigthCar() {
   const purchasedCars = JSON.parse(localStorage.getItem("purchasedCars")) || [];
    if (curentCar < purchasedCars.length - 1) {
        curentCar++;
        carsInGarage();
    } else {
        curentCar = 0;
        carsInGarage();
    }
}   

function sellCarView() {
    const contentBox = document.getElementById("content-of-content");
    const purchasedCars = JSON.parse(localStorage.getItem("purchasedCars")) || [];
    const returnMoney = Math.floor(purchasedCars[curentCar].price * purchasedCars[curentCar].priceGrowth);
    contentBox.innerHTML = `<header class="pixel-panel">GARAGE</header>
    <div id="count-garage" class="pixel-button"></div>
    <a id="return" class="pixel-button" onclick="startView()"><-</a>
    <div id="content-garage">
       <h1>Do you really want to sell this car for ${returnMoney}?</h1>
       <div id="confirm-sell" class="pixel-button" onclick="sellCar()">YES</div>
       <div id="cancel-sell" class="pixel-button" onclick="garageView()">NO</div>
    </div>`
    startMoney();
    updateMoneyDisplay();
}
function sellCar() {
    const purchasedCars = JSON.parse(localStorage.getItem("purchasedCars")) || [];
    const returnMoney = Math.floor(purchasedCars[curentCar].price * purchasedCars[curentCar].priceGrowth);
    const currentMoney = getMoney();
    setMoney(currentMoney + Math.floor(returnMoney));
    purchasedCars.splice(curentCar, 1);
    localStorage.setItem("purchasedCars", JSON.stringify(purchasedCars));
    curentCar = 0;
    garageView();   
    popupWindow(`You sold this car for ${returnMoney}$`);
}

function tuningView() {
     const contentBox = document.getElementById("content-of-content");
    contentBox.innerHTML = `<header class="pixel-panel">GARAGE</header>
    <div id="count-garage" class="pixel-button"></div>
    <a id="return" class="pixel-button" onclick="garageView()"><-</a>
    <div id="content-garage">
       <h1>Upgrade your car!</h1>
       <div class="tuningrow">
            <img src="parts/engine.png" class="tuningimg" alt="parts">
            <div id="engine-levels">
                <div class="level" id="engine-1"></div>
                <div class="level" id="engine-2"></div>
                <div class="level" id="engine-3"></div>
                <div class="level" id="engine-4"></div>
                <div class="level" id="engine-5"></div>
                <div class="level" id="engine-6"></div>
            </div>
            <div id="engine-buy" class="pixel-button" onclick="tuningSystem('tuningEngine')">5000$</div>
        </div>
        <div class="tuningrow">
            <img src="parts/turbo.png" class="tuningimg" alt="parts">
            <div id="turbo-levels">
                <div class="level" id="turbo-1"></div>
                <div class="level" id="turbo-2"></div>
                <div class="level" id="turbo-3"></div>
                <div class="level" id="turbo-4"></div>
                <div class="level" id="turbo-5"></div>
                <div class="level" id="turbo-6"></div>
            </div>
            <div id="turbo-buy" class="pixel-button" onclick="tuningSystem('tuningTurbo')">5000$</div>
        </div>
        <div class="tuningrow">
            <img src="parts/wheel.png" class="tuningimg" alt="parts">
            <div id="wheels-levels">
                <div class="level" id="wheel-1"></div>
                <div class="level" id="wheel-2"></div>
                <div class="level" id="wheel-3"></div>
                <div class="level" id="wheel-4"></div>
                <div class="level" id="wheel-5"></div>
                <div class="level" id="wheel-6"></div>
            </div>
            <div id="wheel-buy" class="pixel-button" onclick="tuningSystem('tuningWheels')">5000$</div>
        </div>

    </div>`
    startMoney();
    updateMoneyDisplay();



    const purchasedCars = JSON.parse(localStorage.getItem("purchasedCars")) || [];
    //engine
  

    switch (purchasedCars[curentCar].tuningEngine) {
    case 1:
        const engineLevel = document.getElementById("engine-" + 1);
        engineLevel.classList.add("active-level");
        break;
    case 2:
        for (let i=1; i<=2; i++) {
            const engineLevel = document.getElementById("engine-" + i);
            engineLevel.classList.add("active-level");
        }   
        break;
    case 3:
         for (let i=1; i<=3; i++) {
            const engineLevel = document.getElementById("engine-" + i);
            engineLevel.classList.add("active-level");
        }  
        break;
    case 4:
         for (let i=1; i<=4; i++) {
            const engineLevel = document.getElementById("engine-" + i);
            engineLevel.classList.add("active-level");
        }  
        break;
    case 5:
         for (let i=1; i<=5; i++) {
            const engineLevel = document.getElementById("engine-" + i);
            engineLevel.classList.add("active-level");
        }  
        break;
    case 6:
         for (let i=1; i<=6; i++) {
            const engineLevel = document.getElementById("engine-" + i);
            engineLevel.classList.add("active-level");
        }  
        break;
    default:
        break;
        
    }

    //turbo 
    switch (purchasedCars[curentCar].tuningTurbo) {
    case 1:
        const turboLevel = document.getElementById("turbo-" + 1);
        turboLevel.classList.add("active-level");
        break;
    case 2:
        for (let i=1; i<=2; i++) {
            const turboLevel = document.getElementById("turbo-" + i);
            turboLevel.classList.add("active-level");
        }   
        break;
    case 3:
         for (let i=1; i<=3; i++) {
            const turboLevel = document.getElementById("turbo-" + i);
            turboLevel.classList.add("active-level");
        }  
        break;
    case 4:
         for (let i=1; i<=4; i++) {
            const turboLevel = document.getElementById("turbo-" + i);
            turboLevel.classList.add("active-level");
        }  
        break;
    case 5:
         for (let i=1; i<=5; i++) {
            const turboLevel = document.getElementById("turbo-" + i);
            turboLevel.classList.add("active-level");
        }  
        break;
    case 6:
        for (let i=1; i<=6; i++) {
            const turboLevel = document.getElementById("turbo-" + i);
            turboLevel.classList.add("active-level");
        }  
        break;
    default:
        break;
        
    }

    //wheels
   
    switch (purchasedCars[curentCar].tuningWheels) {
    case 1:
        const wheelsLevel = document.getElementById("wheel-" + 1);
        wheelsLevel.classList.add("active-level");
        break;
    case 2:
        for (let i=1; i<=2; i++) {
            const wheelsLevel = document.getElementById("wheel-" + i);
            wheelsLevel.classList.add("active-level");
        }   
        break;
    case 3:
         for (let i=1; i<=3; i++) {
            const wheelsLevel = document.getElementById("wheel-" + i);
            wheelsLevel.classList.add("active-level");
        }  
        break;
    case 4:
         for (let i=1; i<=4; i++) {
            const wheelsLevel = document.getElementById("wheel-" + i);
            wheelsLevel.classList.add("active-level");
        }  
        break;
    case 5:
         for (let i=1; i<=5; i++) {
            const wheelsLevel = document.getElementById("wheel-" + i);
            wheelsLevel.classList.add("active-level");
        }  
        break;
    case 6:
         for (let i=1; i<=6; i++) {
            const wheelsLevel = document.getElementById("wheel-" + i);
            wheelsLevel.classList.add("active-level");
        }  
        break;
    default:
        break;
        
    }

    let tuningBonusPrice;
    if (purchasedCars[curentCar].softcap === true) {
        tuningBonusPrice = 0.23;
    } else {
        tuningBonusPrice = 0.1;
    }


    let tuningCost = purchasedCars[curentCar].price * tuningBonusPrice * purchasedCars[curentCar].priceGrowth;
    tuningCost = Math.ceil(tuningCost / 100) * 100;
    const tuningWheelButton = document.getElementById("wheel-buy");
    const tuningEngineButton = document.getElementById("engine-buy");
    const tuningTurboButton = document.getElementById("turbo-buy");
    tuningEngineButton.textContent = tuningCost + "$";
    tuningTurboButton.textContent = tuningCost + "$";
    tuningWheelButton.textContent = tuningCost + "$";

}

function tuningSystem(type) {
    let purchasedCars = JSON.parse(localStorage.getItem("purchasedCars")) || [];
    let tuningBonusPrice;
    if (purchasedCars[curentCar].softcap === true) {
        tuningBonusPrice = 0.23;
    } else {
        tuningBonusPrice = 0.1;
    }
    let tuningCost = purchasedCars[curentCar].price * purchasedCars[curentCar].priceGrowth * tuningBonusPrice;
    tuningCost = Math.ceil(tuningCost / 100) * 100;
    const currentMoney = getMoney();
    let tuningLevel = purchasedCars[curentCar][type];
    if (tuningLevel < 6 && currentMoney >= tuningCost) {
        generateBenefits(curentCar, type);
        purchasedCars = JSON.parse(localStorage.getItem("purchasedCars")) || [];
        purchasedCars[curentCar][type] = tuningLevel + 1;
        setMoney(currentMoney - tuningCost);
        localStorage.setItem("purchasedCars", JSON.stringify(purchasedCars));
        tuningView();
        popupWindow(`Car tuned for ${tuningCost}$. Did it help? Who knows…`);
    }

}

function generateBenefits(currentCar, type) {
    const purchasedCars = JSON.parse(localStorage.getItem("purchasedCars")) || [];
    const tunningLevel = purchasedCars[curentCar][type];
    switch (type) {
        case "tuningEngine":
            purchasedCars[curentCar].power += 45;
            purchasedCars[curentCar].priceGrowth += 0.25;
            if (purchasedCars[curentCar][type] > 3) {
                purchasedCars[curentCar].softcap = true;
            }
        break;
        case "tuningTurbo":
            const fortune = Math.random();
            if (fortune < 0.74) {
                purchasedCars[curentCar].power += 90;
                purchasedCars[curentCar].priceGrowth += 0.10;
            } else {
                purchasedCars[curentCar].damage += 12;
                console.log("failed");
            }

            if (purchasedCars[curentCar][type] > 3) {
                purchasedCars[curentCar].softcap = true;
            }

        break;
        case "tuningWheels":
            purchasedCars[curentCar].priceGrowth += 0.13;
            if (purchasedCars[curentCar].tuningEngine > 2 || purchasedCars[curentCar].tuningTurbo > 2 ) {
                purchasedCars[curentCar].power += 20;
                purchasedCars[curentCar].priceGrowth += 0.25;
            }
            if (purchasedCars[curentCar][type] > 3) {
                purchasedCars[curentCar].softcap = true;
            }



    }
    localStorage.setItem("purchasedCars", JSON.stringify(purchasedCars));

}


const tasksList = [
    {
        id: 0,
        name: "Party tonight",
        description: "Famous person need a driver for tonight. It is good oportunity for you to earn some money",
        require: "Limusine",
        reward: 3000,
    },
    {
        id: 1,
        name: "Weeding!",
        description: "Your friend is getting married and need a car for this special day. His future wife said that they give you a tip.",
        require: false,
        reward: 500,
    },
    {
        id: 2,
        name: "Airport Pickup",
        description: "Late-night flight landed early. Businessman needs a fast and comfortable ride to the hotel.",
        require: "Sedan",
        reward: 1200,
    },
    {
        id: 3,
        name: "City Rush",
        description: "Courier company needs a quick driver to deliver documents across the city before deadline.",
        require: "Hatchback",
        reward: 800,
    },
    {
        id: 4,
        name: "VIP Escort",
        description: "Local celebrity wants privacy and comfort during city travel.",
        require: "Limousine",
        reward: 4500,
    },
    {
        id: 5,
        name: "Mountain Trip",
        description: "Group of tourists want to reach mountain cabin safely. Road conditions are rough.",
        require: "SUV",
        reward: 2000,
    },
    {
        id: 6,
        name: "Track Day",
        description: "Racing event organizer needs a driver to test cars on the track.",
        require: "Sports Car",
        reward: 3500,
    },
    {
        id: 7,
        name: "Night Ride",
        description: "Anonymous client wants a quiet ride through the city at night.",
        require: false,
        reward: 700,
    },
    {
        id: 8,
        name: "Wedding Convoy",
        description: "Wedding guests need several elegant cars for a ceremonial drive.",
        require: "Sedan",
        reward: 1800,
    },
    {
        id: 9,
        name: "Luxury Shopping",
        description: "Rich client wants to visit exclusive shops without worrying about parking.",
        require: "Limousine",
        reward: 3200,
    },
    {
        id: 10,
        name: "Off-road Photoshoot",
        description: "Car magazine needs a vehicle for an outdoor photoshoot.",
        require: "SUV",
        reward: 2500,
    },
    {
        id: 11,
        name: "Street Reputation",
        description: "Local tuner crew challenges you to show off your car in the city.",
        require: "Sports Car",
        reward: 1500,
    }
];


function popupWindow(prompt) {
    const popupBackground = document.createElement("div");
    popupBackground.className = "popup-background";
    
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
    <div class="pixel-panel">${prompt}</div>
    <div class="pixel-button" onclick="this.parentElement.parentElement.remove()">OK</div>
    `;
    
    popupBackground.appendChild(popup);
    document.body.appendChild(popupBackground);

//
   // setTimeout(() => {
   //     popupBackground.remove();
  //  }, 1200);
}

const raceCategory = [
    {
        id: 0,
        nameOfRace: "1vs1",
        photoRacePath: "race/1vs1.png",
        description: "Death race 1vs1. All or nothing! \n It doesn't matter what car model or how many horsepower it has. If you win, you'll get a car of a similar class.",
        entryPrice: 0,
        recuireCar: false,
        loseCar: true,
        fine: false,
        recuirePower: 0
    },
  //  {
  //      id: 1,
   //     nameOfRace: "Highway",
    //    photoRacePath: "race/higway.png",
    //    description: "Night street race. Even if you win, you can still get a hefty fine from the police.",
     //   entryPrice: 1400,
     //   recuireCar: false,
    //    loseCar: false,
    //    fine: true,
    //    recuirePower: 230
  //  },
    {
        id: 1,
        nameOfRace: "Rally",
        photoRacePath: "race/rally.png",
        description: "Race like Monte Carlo, you must to have car with Rally tag and some skills. \n Entry price: 2000$",
        entryPrice: 2000,
        recuireCar: "RALLY",
        loseCar: false,
        fine: false,
        recuirePower: 0
    }
]

let currentRace = 0;

function raceInRace() {
    const purchasedCars = JSON.parse(localStorage.getItem("purchasedCars")) || [];
    const photo = document.getElementById("garage-pht-car");
    const info = document.getElementById("garage-tech");
    const name = document.getElementById("garage-car-name");
    

        name.textContent = raceCategory[currentRace].nameOfRace;
        info.textContent = raceCategory[currentRace].description;
        photo.src = raceCategory[currentRace].photoRacePath;
    console.log(currentRace);
}

function leftRace() {
    if (currentRace > 0) {
        currentRace--;
        raceInRace();
    } else {
        currentRace = raceCategory.length - 1;
        raceInRace();
    }
}   
function rightRace() {
    if (currentRace< raceCategory.length - 1) {
        currentRace++;
        raceInRace();
    } else {
        currentRace= 0;
        raceInRace();
    }
    console.log(currentRace);
}   

function raceSystem() {
    if (currentRace === 1) {
        if (raceCategory[currentRace].entryPrice <= getMoney() && (!raceCategory[currentRace].recuireCar || (JSON.parse(localStorage.getItem("purchasedCars")) || []).some(car => basicCarInfo[car.carId].type === raceCategory[currentRace].recuireCar))) {
            snakeGame();
        } else {
            popupWindow("You don't have enough money or a required car to enter this competition!");
        }
    }
    else if (currentRace === 0) raceSystemView();
}

function raceSystemView() {
    const contentBox = document.getElementById("content-of-content");
    const purchasedCars = JSON.parse(localStorage.getItem("purchasedCars")) || [];
    contentBox.innerHTML = `<header class="pixel-panel">SELECT CAR</header>
    <div id="count-garage" class="pixel-button"></div>
    <a id="return" class="pixel-button" onclick="startView()"><-</a>
    <div id="content-race-system"></div>`
    if (purchasedCars.length === 0) {
         console.log("no cars");
            const noCarInfo = document.createElement('div');
            noCarInfo.textContent = "You don't have any cars";
            const container = document.getElementById('content-race-system');
            container.appendChild(noCarInfo);
    } else {
        for (let i=0; i < purchasedCars.length; i++) {
            const carBox = document.createElement('div');
            const carPhoto = document.createElement('img');
            const carInfo = document.createElement('div');
            carPhoto.src = basicCarInfo[purchasedCars[i].carId].photoPath;
            carInfo.textContent = `${purchasedCars[i].power} HP`;
            const container = document.getElementById('content-race-system');
            carBox.classList.add('race-box');
            carBox.onclick = function() {selectCarForRace(i)};
            carPhoto.classList.add('race-photo');
            carInfo.classList.add('race-info');
            container.appendChild(carBox);
            carBox.appendChild(carPhoto);
            carBox.appendChild(carInfo);
        }
    }
    startMoney();
    updateMoneyDisplay();
}
function whoWinRisk() {
    const number = Math.random();
    if (number < 0.4) {
        return true;
    } else {
        return false;
    }


}
function selectCarForRace(index) {
    const purchasedCars = JSON.parse(localStorage.getItem("purchasedCars")) || [];
    const winner = whoWinRisk();
    if (raceCategory[currentRace].loseCar) {
        if (winner) {
            popupWindow("You win, you have new car in your garage!");
            const carClass = basicCarInfo[purchasedCars[index].carId].class;
            const newCarBase = basicCarInfo.filter(car => car.class === carClass);
            const newCarNumber = Math.floor(Math.random() * newCarBase.length);
            const newCar = newCarBase[newCarNumber].id;
            console.log(newCar);
            let price = Math.floor(Math.random() * (basicCarInfo[newCar].maxPrice - basicCarInfo[newCar].minPrice + 1)) + basicCarInfo[newCar].minPrice;
            price = Math.ceil(price / 100) * 100;
            const purchasedCar = {
                carId: newCar, // tylko indeks auta z basicCarInfo
                uniqueId: Date.now() + Math.random(),// unikalny ID zakupu
                price: price,
                power: basicCarInfo.find(car => car.id === newCar).basicPower,
                tuningEngine: 0,
                tuningTurbo: 0,
                tuningWheels: 0,
                priceGrowth: 0.85,
                damage: 0,
                softcap: false
            };
            console.log("otrzymane", purchasedCar);
            purchasedCars.push(purchasedCar);
            localStorage.setItem("purchasedCars", JSON.stringify(purchasedCars));
        } else {
            console.log("you lose");
            purchasedCars.splice(index, 1);
            curentCar = 0;
            console.log(purchasedCars);
            console.log(index);
            console.log(curentCar);
            localStorage.setItem("purchasedCars", JSON.stringify(purchasedCars));
            popupWindow("You lose, you have lost your car!");
        }
    raceView();
    }
    else if (raceCategory[currentRace].fine) {
        if (winner) {
            popupWindow("You win, but you may got a fine from police for illegal street racing.");
            const currentMoney = getMoney();
            const ifFine = whoWinRisk();
            let fine;
            if (!ifFine) {
            fine = Math.floor(currentMoney * 0.17);
            }
            else fine = 0;
            const reward = 10000;
            const total = reward - fine;
            console.log("Win",total);
            setMoney(currentMoney + total);
        } else {
            popupWindow("You lose, but you may got a fine from police for illegal street racing too.");
            const currentMoney = getMoney();
            const ifFine = whoWinRisk();
            let fine;
            if (!ifFine) {
            fine = Math.floor(currentMoney * 0.17);
            }
            else fine = 0;
            console.log("Lose",fine);
            setMoney(currentMoney - fine);
        }
}
}

function snakeGame() {
    snakeView();
    setMoney(getMoney() - 2000);
    updateMoneyDisplay();
}

let canvas;
let ctx;
// domyślna wielkość obiektu
const box = 20;
let wynik=0;
let snake = [{ x: 9 * box, y: 9 * box }]; // początkowa pozycja
let direction = 'RIGHT'; // początkowy kierunek
let nextDirection = 'RIGHT';
let intervalId = null;
let food;


function snakeView() {
    const contentBox = document.getElementById("content-of-content");
    contentBox.innerHTML = `<header class="pixel-panel">RALLY SNAKE</header>
    <div id="count-garage" class="pixel-button"></div>
    <a id="return" class="pixel-button" onclick="startView()"><-</a>
    <div id="content-snake">
        <canvas id="snake-canvas" width="800" height="400"></canvas>
        <div id="start-snake" class="pixel-button" onclick="startGame()">START</div>
    </div>`
    canvas = document.getElementById('snake-canvas');
    ctx = canvas.getContext('2d');
    adjustCanvas();
    generateFood();
}

function adjustCanvas() {
    const centerBar = document.getElementById("content-snake");
    // Pobieramy szerokość rodzica (center-bar)
    let parentWidth = centerBar.clientWidth;
    console.log("Szerokość rodzica:", parentWidth);
    // Wysokość możemy zostawić zależną od okna lub też od rodzica
    let mw = parentWidth * 0.95;
    let mh = window.innerHeight * 0.5; // Wysokość na ok. 50% ekranu
    //let widthPix = window.innerWidth;
    //let heightPix = window.innerHeight;


    // Ograniczamy maksymalny rozmiar, żeby gra nie była za wielka na monitorach
    if (mw > 2000) mw = 2000;
    //if (mh > 800) mh = 800;

    // KLUCZOWE: Zaokrąglamy w dół do najbliższej wielokrotności 'box'
    canvas.width = Math.floor(mw / box) * box;
    canvas.height = Math.floor(mh / box) * box;
   // resetGame();
}

document.addEventListener('keydown', changeDirection);
function changeDirection(event) {
   if (event.key === 'ArrowLeft' && direction !== 'RIGHT') nextDirection = 'LEFT';
    else if (event.key === 'ArrowUp' && direction !== 'DOWN') nextDirection = 'UP';
    else if (event.key === 'ArrowRight' && direction !== 'LEFT') nextDirection = 'RIGHT';
    else if (event.key === 'ArrowDown' && direction !== 'UP') nextDirection = 'DOWN';
}

function generateFood() {
    food = {
    x: Math.floor(Math.random() * (canvas.width / box)) * box,
    y: Math.floor(Math.random() * (canvas.height / box)) * box
    };
}

function resetGame() {
    stopGame();
}

function stopGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake = [{ x: 9 * box, y: 9 * box }];
    direction = 'RIGHT';
    nextDirection = 'RIGHT';
    wynik=0;
    food = {};
    clearInterval(intervalId);
    intervalId = null;
    popupWindow("Game Over!");
    raceView();
    raceInRace();
}


function collision(head, array) {
    for (let i = 1; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) return true;
    }
    return false;
}

function game() {
    direction = nextDirection;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(food.x, food.y, box, box);
    // pozycja głowy
    let headX = snake[0].x;
    let headY = snake[0].y;

    if (direction === 'RIGHT') headX += box;
    if (direction === 'LEFT') headX -= box;
    if (direction === 'UP') headY -= box;
    if (direction === 'DOWN') headY += box;

    if (headX < 0 || headX >= canvas.width || headY < 0 || headY >= canvas.height || collision({ x: headX, y: headY }, snake)) {
        resetGame();
    } else {
        snake.unshift({ x: headX, y: headY });
        if (headX === food.x && headY === food.y) {
            generateFood();
            wynik++;
            wynikView();
            // nie usuwamy ogona -> wąż rośnie
        } else {
            snake.pop(); // usuwa ostatni segment
        }
        // rysowanie
        for (let i = 0; i < snake.length; i++) {
            ctx.fillStyle = 'red';
            ctx.strokeStyle = 'black';
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
            ctx.strokeRect(snake[i].x, snake[i].y, box, box);
        }
    }
}

function wynikView() {
    getMoney();
    setMoney(getMoney() + 500);
    updateMoneyDisplay();
}

function startGame() {
    if (intervalId) return;
    intervalId = setInterval(game, 100);
}


function showHelp() {
    console.log("help");
    const contentBox = document.getElementById("content-of-content");
    contentBox.innerHTML = `<header class="pixel-panel">HELP</header>
    <a id="return" class="pixel-button" onclick="startView()"><-</a>
    <div id="content-help">
        <div>    
            <h1> Welcome to Pixel Cars Game! </h1>
            Here you can trade cars, tune them, and take part in races. The game is still under development, so some features may not work fully.
            <h3> Version 1.0 </h3>
        </div>
        <div class="pixel-button" onclick="resetProgress()">Reset Progress - cannot be undone</div>
    </div>`
}

function resetProgress() {
    localStorage.clear();
    location.reload();
}