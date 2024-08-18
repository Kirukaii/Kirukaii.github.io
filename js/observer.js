function changeClass(hiddenClassWithPoint, showClass){
    const circle = document.querySelectorAll(hiddenClassWithPoint);

    const ob = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if(entry.isIntersecting) {
                entry.target.classList.add(showClass);
            } else {
                entry.target.classList.remove(showClass);
            }
        });
    });
    circle.forEach((el) => ob.observe(el));
}