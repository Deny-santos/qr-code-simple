const input = document.querySelector("input")
const qrcode = document.querySelector("#qrcode")

document.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        gerarCode()
    }
})

function gerarCode() {
    if(!input.value) {
        qrcode.src = ""
        return
    }


    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
}