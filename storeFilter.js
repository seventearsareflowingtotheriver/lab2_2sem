let utils = [
    {name: "wincrack", type: "Hack tool", system: "Windows", price: 0},
    {name: "Lindroid", type: "Utility", system: "Linux", price: 0},
    {name: "Windroid", type: "Utility", system: "Windows", price: 0},
    {name: "Windroid Mobile", type: "Utility", system: "Android", price: 0},
    {name: "Terminalist", type: "AI soft", system: "Linux", price: 49.99},
    {name: "Winland", type: "UI", system: "Linux", price: 0},
    {name: "Pineapp", type: "Hack tool", system: "Android", price: 7.99},
    {name: "Snakeater Antivirus", type: "Antivirus", system: "Windows", price: 29.99},
    {name: "NetGhost", type: "Network", system: "macOS", price: 15.99},
    {name: "CodeWhisper", type: "AI soft", system: "Windows", price: 12.50},
    {name: "RootKit Finder", type: "Antivirus", system: "Linux", price: 0},
    {name: "AppHider", type: "Utility", system: "Android", price: 2.99},
    {name: "Macify", type: "UI", system: "Windows", price: 4.99},
    {name: "DroidNet", type: "Network", system: "Android", price: 0},
    {name: "CyberShield", type: "Antivirus", system: "macOS", price: 39.99},
    {name: "PacketSniffer Pro", type: "Hack tool", system: "Linux", price: 89.99},
    {name: "AutoClicker X", type: "Utility", system: "Windows", price: 0},
    {name: "BatteryOptimizer", type: "Utility", system: "Android", price: 1.99},
    {name: "DeepFake Gen", type: "AI soft", system: "Windows", price: 120.00},
    {name: "TuxPaint UI", type: "UI", system: "Linux", price: 0},
    {name: "WiFi Breaker", type: "Hack tool", system: "Android", price: 5.50},
    {name: "MalwareZapper", type: "Antivirus", system: "Windows", price: 19.99},
    {name: "DataRescue", type: "Data Recovery", system: "macOS", price: 59.99},
    {name: "PingMaster", type: "Network", system: "Linux", price: 0},
    {name: "NeuralDraw", type: "AI soft", system: "macOS", price: 25.00},
    {name: "IconPack Neon", type: "UI", system: "Android", price: 0.99},
    {name: "KeyLogger Lite", type: "Hack tool", system: "Windows", price: 0},
    {name: "Firewall Defender", type: "Network", system: "Linux", price: 14.99},
    {name: "SpaceCleaner", type: "Utility", system: "macOS", price: 9.99},
    {name: "VoiceClone API", type: "AI soft", system: "Linux", price: 199.99},
    {name: "Camouflage OS", type: "UI", system: "Windows", price: 0},
    {name: "Bluetooth Sniper", type: "Hack tool", system: "Android", price: 12.00},
    {name: "CryptoGuard", type: "Antivirus", system: "macOS", price: 45.00},
    {name: "PortScanner 3000", type: "Network", system: "Windows", price: 0},
    {name: "TextToVideo AI", type: "AI soft", system: "Android", price: 8.99},
    {name: "RetroTheme", type: "UI", system: "Linux", price: 0},
    {name: "PasswordDumper", type: "Hack tool", system: "Windows", price: 35.00},
    {name: "AdBlock Ultimate", type: "Utility", system: "macOS", price: 3.99},
    {name: "SysMonitor", type: "Utility", system: "Linux", price: 0},
    {name: "Ransomware Decrypt", type: "Antivirus", system: "Windows", price: 0}
];

let searchElement = document.getElementById("search");
let cardsContainer = document.getElementById("cards");

let minPriceField = document.getElementById("min-value");
let maxPriceField = document.getElementById("max-value");

function displayData() {
    let searchQuery = searchElement.value.trim().toLowerCase();

    let minPrice = parseFloat(minPriceField.value) || 0;
    let maxPrice = maxPriceField.value === "" ? Infinity : parseFloat(maxPriceField.value);
    
    let filtered = utils.filter(item => {
        let matchesSearch = item.name.toLowerCase().includes(searchQuery);
        let matchesPrice = item.price >= minPrice && item.price <= maxPrice;
        
        return matchesSearch && matchesPrice;
    });

    cardsContainer.innerHTML = "";

    filtered.forEach(item => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>System: ${item.system}</p>
            <p>Price: <b>$${item.price}</b></p> 
        `;
        cardsContainer.appendChild(card);
    });
}

document.getElementById("asc-sort").onclick = () => {
    utils.sort((a, b) => a.price - b.price);
    displayData();
};

document.getElementById("desc-sort").onclick = () => {
    utils.sort((a, b) => b.price - a.price);
    displayData();
};

document.getElementById("name-az-sort").onclick = () => {
    utils.sort((a, b) => a.name.localeCompare(b.name));
    displayData();
};

document.getElementById("name-za-sort").onclick = () => {
    utils.sort((a, b) => b.name.localeCompare(a.name));
    displayData();
};

searchElement.addEventListener("input", displayData);
minPriceField.addEventListener("input", displayData);
maxPriceField.addEventListener("input", displayData);
displayData();