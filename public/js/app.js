let myButtons = document.querySelectorAll(".btn-modal")
let myModals = document.querySelectorAll(".backdrop")


myButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let modalData = btn.getAttribute("modal-data")
        myModals.forEach(modal => {
          
            if (modal.id == modalData) {
                modal.style.display = "flex"
            }
          
            modal.querySelector(".close-modal").addEventListener("click", () => {
                modal.style.display = "none"
            })

            
            modal.addEventListener("click", () => {
                modal.style.display = "none"
            })

        });
    })
});

let slideIndex = 0;
showSlides();

const showSlides=()=> {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 9000); // Change image every 2 seconds
}