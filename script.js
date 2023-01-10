const input = document.querySelector("input")
const qrcode = document.querySelector("#qrcode")
const btn = document.querySelector("button")


const generator = (e) => {
    if(e.key === "Enter") {
        gerarCode()
    }
}

btn.onclick = () => gerarCode()

document.addEventListener("keypress", generator)

function gerarCode() {
    if(!input.value) {
        qrcode.src = ""
        return
    }


    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
}

