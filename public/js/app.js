let modal = document.getElementById("loginModal");
let btn = document.getElementById("loginBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



//*Menu
let btnrest = document.querySelector(".btnRest")
let starBtn =document.querySelector(".starBtn")
let brakBtn =document.querySelector(".brakBtn")
let lunchBtn =document.querySelector(".lunchBtn")
let dinnBtn =document.querySelector(".dinnBtn")

starBtn.addEventListener("click",()=>{
  // alert("okk")
  let repas= document.querySelector("#title")
  let palt = document.querySelector(".content-plat")
  repas.textContent = "Starters"
 
  
  palt.classList.add("anim")
  setTimeout(() => {
    palt.classList.remove("anim")
  }, 1000);
  
  
})
brakBtn.addEventListener("click",()=>{
  let repas= document.querySelector("#title")
  let palt = document.querySelector(".content-plat")
  repas.textContent = "Breakfast"

  palt.classList.add("anim")
  setTimeout(() => {
    palt.classList.remove("anim")
  }, 1000);
})
lunchBtn.addEventListener("click",()=>{
  let repas= document.querySelector("#title")
  let palt = document.querySelector(".content-plat")
  repas.textContent = "Lunch"

  palt.classList.add("anim")
  setTimeout(() => {
    palt.classList.remove("anim")
  }, 1000);
})
dinnBtn.addEventListener("click",()=>{
  let repas= document.querySelector("#title")
  let palt = document.querySelector(".content-plat")
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

            //! variables  sal7in  ghir  l lelement  li mt7a9a9 fih chart dyalna  
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
        }, 3000);
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
//*carousel2
let index = 0;
let images = document.getElementsByClassName("image");

function createIndicators() {
    const indicatorWrapper = document.querySelector('#indicators');
    for (i = 0; i < images.length; i++) {
        const dot = document.createElement('div');
        dot.style.width = "10px";
        dot.style.height = "10px";
        dot.style.backgroundColor = "black";
        dot.dataset.imageIndex = i;

        dot.addEventListener('click', function (e) {
            const index = e.target.dataset.imageIndex;
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = "none";
            }
            images[index].style.display = "block";
        })

        indicatorWrapper.append(dot)
    }
}

function displayImages() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    index++;
    if (index > images.length) {
        index = 1;
    }
    images[index - 1].style.display = "block";
    setTimeout(displayImages, 4000);
}

displayImages();
createIndicators();
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