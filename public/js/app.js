let myButtons = document.querySelectorAll(".btn-modal")
let myModals = document.querySelectorAll(".backdrop")


myButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let modalData = btn.getAttribute("modal-data")
        myModals.forEach(modal => {
            // * show modal
            if (modal.id == modalData) {
                modal.style.display = "flex"
            }
            // ! close modal with button
            modal.querySelector(".close-modal").addEventListener("click", () => {
                modal.style.display = "none"
            })

            // ! close modal with backdrop press
            modal.addEventListener("click", () => {
                modal.style.display = "none"
            })

        });
    })
});