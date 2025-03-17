document.addEventListener("DOMContentLoaded", function () {
    const flowerContainer = document.querySelector(".flower-container");

    function createFlower() {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.style.left = Math.random() * 100 + "vw"; // 랜덤 위치
        flower.style.animationDuration = Math.random() * 5 + 3 + "s"; // 떨어지는 속도 조절
        flowerContainer.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 8000); // 애니메이션 후 제거
    }

    setInterval(createFlower, 500); // 꽃이 생성되는 간격
});
