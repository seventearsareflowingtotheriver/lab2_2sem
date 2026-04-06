(function() {
    const adWindow = document.getElementById("ad-window");
    const closeBtn = document.getElementById("close-ad");
    let isAdClosed = false;

    const handleScroll = () => {
        if (isAdClosed) return; 

        const scrolled = window.scrollY;

        if (scrolled > 1280) {
            adWindow.classList.add("show-ad");
        }
    };

    closeBtn.onclick = () => {
        adWindow.classList.remove("show-ad");
        isAdClosed = true;
    };

    window.addEventListener('scroll', handleScroll);
})();