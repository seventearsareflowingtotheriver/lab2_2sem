(function() {

    const scrollBtn = document.createElement("button");
    scrollBtn.id = "scroll-btn";
    scrollBtn.innerHTML = "UP";
    document.body.appendChild(scrollBtn);

    const scrollAd = () => {
        const scrolled = window.scrollY;

        if (scrolled > 1280) {
            scrollBtn.classList.add("show-ad")
        }
    };

    scrollBtn.onclick = () => { window.scrollTo({ top: 0, behavior: 'smooth'}); };

    window.addEventListener('scroll', handleScroll);
})();