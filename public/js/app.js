//*navbar
let body = document.querySelector("body")
let dispalyMenu = document.querySelector(".display-menu")
let navMenu = document.querySelector(".menu")
let closeMenu = document.querySelector(".close")


dispalyMenu.addEventListener("click", ()=>{
  navMenu.style.display="flex"
  body.style.backgroundColor = " #000000bc"

})
closeMenu.addEventListener("click", ()=>{
   navMenu.style.display="none"
   body.style.backgroundColor = "#fff"
})


//*Modal
let modal = document.getElementById("Modal");
let button = document.getElementById("loginbutton");
let div = document.getElementsByClassName("close")[0];
button.onclick = function() {
    modal.style.display = "block";
}

div.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//*
document.addEventListener('DOMContentLoaded', function() {
    const addVideo = GLightbox({
      selector: '.addVideo'
    });
});

//*restaurant-Menu

let star =document.querySelector(".star")
let breakfast =document.querySelector(".breakfast")
let lunch =document.querySelector(".lunch")
let dinner =document.querySelector(".dinner")

star.addEventListener("click",()=>{
  
  let repas= document.querySelector("#title")
  let palt = document.querySelector(".plat")
  repas.textContent = "Starters"
 
  
  palt.classList.add("anim")
  setTimeout(() => {
    palt.classList.remove("anim")
  }, 1000);
  
  
})
breakfast.addEventListener("click",()=>{
  let repas= document.querySelector("#title")
  let palt = document.querySelector(".plat")
  repas.textContent = "Breakfast"

  palt.classList.add("anim")
  setTimeout(() => {
    palt.classList.remove("anim")
  }, 1000);
})
lunch.addEventListener("click",()=>{
  let repas= document.querySelector("#title")
  let palt = document.querySelector(".plat")
  repas.textContent = "Lunch"

  palt.classList.add("anim")
  setTimeout(() => {
    palt.classList.remove("anim")
  }, 1000);
})
dinner.addEventListener("click",()=>{
  let repas= document.querySelector("#title")
  let palt = document.querySelector(".plat")
  repas.textContent = "dinner"

  palt.classList.add("anim")
  setTimeout(() => {
    palt.classList.remove("anim")
  }, 1000);
})

//* caroussel1
let nextBtns = document.querySelectorAll(".next")
let previousBtns = document.querySelectorAll(".previous")
let containers = document.querySelectorAll(".carousel-container")
let currentIndex = 0
const slideImage = (index, myBtn) => {

    let carouselBtnAttribute = myBtn.getAttribute("carouselBtn")

    containers.forEach(container => {
        if (container.id == carouselBtnAttribute) {

           
            let slides = container.querySelectorAll(".slide")
            let camera = container.querySelector(".carousel")
            let slideWidth = slides[0].clientWidth
            let indicators = container.querySelectorAll('.indicator')





            
            if (index < 0) {
                index = slides.length - 1
            } else if (index >= slides.length) {
                
                index = 0
            }

            indicators.forEach(indicator => {
                indicator.classList.remove('activeIndicator')
            });
            indicators[index].classList.add("activeIndicator")


          
            camera.style.transform = `translateX(-${slideWidth * index}px)`
            currentIndex = index
        }
    });


}


nextBtns.forEach(next => {
    next.addEventListener("click", (event) => { slideImage(currentIndex + 1, event.target) })
});


previousBtns.forEach(previous => {
    previous.addEventListener("click", (event) => { slideImage(currentIndex - 1, event.target) })
});


 
containers.forEach(container => {
     
    if (container.getAttribute("autoslide")) {
        let nextBtn = container.querySelector(".next")

        setInterval(() => {
           
            nextBtn.click()
        }, 4000);
    }
});

 

containers.forEach(container => {
     
    let slides = container.querySelectorAll(".slide")
    let indicatorsGrp = document.createElement("div")
    indicatorsGrp.classList.add("indicators-grp")
    container.appendChild(indicatorsGrp)

    slides.forEach(slide => {
        let indicator = document.createElement("div")
        indicator.classList.add("indicator")
        indicatorsGrp.appendChild(indicator)
    });
    indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator')
});

//*carousel3
let galleryContainer = document.querySelector(".gallery-container");
let galleryNavContainer = document.querySelector(".gallery-nav");
let galleryItems = document.querySelectorAll(".gallery-item");

class Carousel1 {
    constructor(container, items, nav) {
        this.carouselContainer = container;
        this.carouselArray = [...items];
        this.carouselNav = nav;
        this.currentItemIndex = 0;
        this.autoSlideInterval = null;
    }

    updateGallery() {
        this.carouselArray.forEach(ele => {
            ele.classList.remove("gallery-item-1");
            ele.classList.remove("gallery-item-2");
            ele.classList.remove("gallery-item-3");
            ele.classList.remove("gallery-item-4");
            ele.classList.remove("gallery-item-5");
        });

        this.carouselArray.slice(0, 5).forEach((ele, i) => {
            ele.classList.add(`gallery-item-${i + 1}`);
        });

        this.updateIndicators();
    }

    updateIndicators() {
        if (this.carouselNav && this.carouselNav.childNodes.length > 0) {
            this.carouselNav.childNodes.forEach(indicator => {
                if (indicator.classList) {
                    indicator.classList.remove('active');
                }
            });
            if (this.currentItemIndex < this.carouselNav.childNodes.length) {
                this.carouselNav.childNodes[this.currentItemIndex].classList.add('active');
            }
        }
    }

    setCurrentState(index) {
        this.currentItemIndex = index;
        this.carouselArray = this.carouselArray.slice(index).concat(this.carouselArray.slice(0, index));
        this.updateGallery();
    }

    setIndicators() {
      // Vider les indicateurs précédents si nécessaire
      while (this.carouselNav.firstChild) {
          this.carouselNav.removeChild(this.carouselNav.firstChild);
      }
  
      this.carouselArray.forEach((_, index) => {
          let li = document.createElement('li');
          li.addEventListener('click', () => {
              this.setCurrentState(index);
              this.stopAutoSlide(); // Stop auto slide when an indicator is clicked
          });
          this.carouselNav.appendChild(li);
      });
  
      // Initialiser l'état des indicateurs
      this.updateIndicators();
  }
  

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.currentItemIndex = (this.currentItemIndex + 1) % this.carouselArray.length;
            this.setCurrentState(this.currentItemIndex);
        }, 2000); // Change slide every 3 seconds
    }

    stopAutoSlide() {
        clearInterval(this.autoSlideInterval);
    }

    init() {
        this.updateGallery();
        this.setIndicators();
        this.startAutoSlide();
        
        // Optional: stop auto slide on mouse over and restart on mouse out
        this.carouselContainer.addEventListener('mouseover', () => this.stopAutoSlide());
        this.carouselContainer.addEventListener('mouseout', () => this.startAutoSlide());
    }
}

const exampleCarousel = new Carousel1(galleryContainer, galleryItems, galleryNavContainer);
exampleCarousel.init();