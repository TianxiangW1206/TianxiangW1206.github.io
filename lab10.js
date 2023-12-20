window.onload = function () {
    const flowerContainer = document.body;

 
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const contactSectionHeight = document.getElementById("contact").offsetHeight;
    const totalHeight = navbarHeight + contactSectionHeight;


    setInterval(createFlower, 300);

    let petalCount = 0;
    const maxPetals = 20; 

    function createFlower() {
        if (petalCount < maxPetals) {
            const flower = document.createElement("div");
            flower.className = "flower";
            flower.style.left = Math.random() * window.innerWidth + "px";
            flower.style.top = -navbarHeight + "px"; 
            flower.style.animationDuration = Math.random() * 2 + 2 + "s"; 
            flowerContainer.appendChild(flower);

            flower.addEventListener("animationend", function () {
                flower.remove();
                petalCount--;
            });

            petalCount++;
        }
    }
};
