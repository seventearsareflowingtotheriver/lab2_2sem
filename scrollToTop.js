(function() {

    /* BUTTON CREATING */
    const scrollBtn = document.createElement("button");
    scrollBtn.id = "scroll-btn";
    scrollBtn.innerHTML = "UP";
    document.body.appendChild(scrollBtn);

    /* BUTTON LOGIC */
    const handleScroll = () => {
        const pageHeight = document.documentElement.scrollHeight;
        const viewHeight = window.innerHeight;
        const scrolled = window.scrollY || document.documentElement.scrollTop;

        const maxScroll = pageHeight - viewHeight // сторінка спочатку не прокручена (0 пікселей вниз). карочє умовно 5000 - 1080 = 3920. кнопка з'явиться як сторінка буде прокручена на 66% з 3920

        if (scrolled > (maxScroll * 2) / 3) { scrollBtn.classList.add("show"); }
        else { scrollBtn.classList.remove("show"); }
    };

    scrollBtn.onclick = () => { window.scrollTo({ top: 0, behavior: 'smooth'}); };

    window.addEventListener('scroll', handleScroll);
})();