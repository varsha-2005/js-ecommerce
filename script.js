const products = document.querySelectorAll(".btn-cart");
const cartPopup = document.getElementById("cart");
const pop = document.getElementById("pop");
let shoppingCart = [];


    cartPopup.addEventListener('click', () => {
        pop.style.display = 'block';
    });

    const cartclose = document.getElementById("popupcancel");
    cartclose.addEventListener("click", () => {
        pop.style.display = "none";
    });
    
    document.getElementById('categories-link').addEventListener('click', function(event) {
        event.preventDefault();
        const container = document.getElementById('categories-container');
        if (container.style.display === 'none' || container.style.display === '') {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });

    var moon = document.getElementById('moon');
    moon.onclick = function() {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            moon.src = "sun.png";
        } else {
            moon.src = "moon.png";
        }
    };

    let scrollContainer = document.querySelector('.gallery');
    let backbtn = document.getElementById('backbtn');
    let nextbtn = document.getElementById('nextbtn');

    scrollContainer.addEventListener("wheel", (e) => {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
        scrollContainer.style.scrollBehaviour = 'auto';
    });

    nextbtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehaviour = 'smooth';
        scrollContainer.scrollLeft += 1700;
    });

    backbtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehaviour = 'smooth';
        scrollContainer.scrollLeft -= 1700;
    });

    const buttons = document.querySelectorAll('.btn');
    const boxes = document.querySelectorAll('.box');
    const searchBox = document.querySelector('#search');

    searchBox.addEventListener('input', (e) => {
        let searchText = e.target.value.toLowerCase().trim();

        boxes.forEach((box) => {
            const search = e.target.value.toLowerCase();

            boxes.forEach((box)=>{
                if (box.textContent.toLowerCase().includes(search)){
                    box.style.display='block'
                    console.log(box.innerText)
                }
                else{
                    box.style.display='none'
                }
            })
        });

        buttons.forEach((button) => {
            button.classList.remove('btn-clicked');
        });
        buttons[0].classList.add('btn-clicked');
    });

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveBtn(e);
            const filter = e.target.dataset.filter;

            boxes.forEach((box) => {
                if (filter == 'all') {
                    box.style.display = 'block';
                } else {
                    if (box.dataset.item.toLowerCase().includes(filter.toLowerCase())) {
                        box.style.display = 'block';
                    } else {
                        box.style.display = 'none';
                    }
                }
            });
        });
    });

    function setActiveBtn(e) {
        buttons.forEach((button) => {
            button.classList.remove('btn-clicked');
        });
        e.target.classList.add('btn-clicked');
    }

    

    products.forEach((product) => {
        product.addEventListener('click', () => {
            let content = product.parentElement;
            let image = content.querySelector("img").src;
            let text1 = content.querySelector(".name").textContent;
            let text2 = content.querySelector(".price").textContent;
            
            // let text3 = content.querySelector(".about").textContent;
            console.log(text1,text2)

            pop.innerHTML += `
                <div class="cartitem">
                    <img src="${image}">
                    <p>${text1}</p>
                    <span>${text2}</span>
                    
                    <button class="removeitem">X</button>
                </div>`;


            const removeButtons = document.querySelectorAll(".removeitem");
            removeButtons.forEach((button) => {
                button.addEventListener("click", (event) => {
                    event.target.parentElement.remove();
                });
            });


            const cartclose = document.getElementById("popupcancel");
        cartclose.addEventListener("click", () => {
            pop.style.display = "none";
        });

        });
    });

    


const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener('click',()=>{
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))