let news = [
    {header: "50% SALE FROM LIAN HUAN INC.", date: "20.03.2026", status: "important"},
    {header: "PINEHACKS REVEALS PINEAPP v1.3", date: "16.03.2026", status: "default"},
    {header: "NETGHOST STOPS SUPPORT FOR ANDROID 9", date: "12.02.2026", status: "important"},
    {header: "TERMINALIST AI NOW SUPPORTS VOICE COMMANDS", date: "22.03.2026", status: "default"},
    {header: "SNAKEATER ANTIVIRUS PREVENTS MASSIVE RANSOMWARE ATTACK", date: "18.03.2026", status: "very important"},
    {header: "ZER0TECH STORE REACHES 100,000 ACTIVE USERS!", date: "10.03.2026", status: "important"},
    {header: "CYBERSHIELD macOS EDITION: WHAT'S NEW?", date: "05.03.2026", status: "default"},
    {header: "WARNING: FAKE 'WINCRACK' COPIES SPREADING MALWARE", date: "01.03.2026", status: "very important"},
    {header: "SPRING CYBER SALE: UP TO 70% OFF ON ALL AI SOFT", date: "28.02.2026", status: "default"},
    {header: "BLUETOOTH SNIPER TEMPORARILY REMOVED FOR REVIEW", date: "25.02.2026", status: "very important"},
    {header: "WINLAND UI GETS A MAJOR REDESIGN", date: "15.02.2026", status: "important"}
];

let cardsContainer = document.getElementById("cards");

function parseDate(dateStr) {
    let parts = dateStr.split(".");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}

function displayNews() {
    cardsContainer.innerHTML = "";

    news.forEach(item => {
        let card = document.createElement("div");
        
        card.className = "card";

        card.innerHTML = `
            <h3>${item.header}</h3>
            <p>Status: <b>${item.status.toUpperCase()}</b></p>
            <p>Date: ${item.date}</p> 
        `;
        cardsContainer.appendChild(card);
    });
}

news.sort((a, b) => parseDate(b.date) - parseDate(a.date));
displayNews();