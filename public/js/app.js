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