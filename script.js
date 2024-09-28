const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeimg = document.querySelector("#qr-code img");

//EVENTOS
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;    //const que armazena o valor do meu input

    if(!qrCodeInputValue) return;  //se eu nao digitar nada retornar para digitar outra vez

    qrCodeBtn.innerText = "Gerando codigo...";  // funçao tipo de um loading para o meu botao

    qrCodeimg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`; // imagem de qr code com link de uma API para qr code...

   qrCodeimg.addEventListener("load", () => {  // como se fosse um loading esperando o codigo ser criado....evento de carregamento
    container.classList.add("active");           //ele so ativa depois que eu escrever no input, ai ativa o valor da imagem do qr code mais o height de 500px que fiz no css,juntando com minha classe container do meu html
    qrCodeBtn.innerText = "Codigo Criado!";
   })
    
}

    qrCodeBtn.addEventListener("click", () => {
        generateQrCode();
    });


    qrCodeInput.addEventListener("keydown", (e) => {  // evento da tecla enter ao apertar (keydown)= tecla pressionada
        if (e.code ==="Enter") {
            generateQrCode();

}
});

    //limpar area do qrcode
    qrCodeInput.addEventListener("keyup", () => {
        if(!qrCodeInput.value) {
            container.classList.remove("active");       //evento com uma funçao de quando eu apagar oque eu escrevi no input voltar a tela de inicio para escrever denovo
            qrCodeBtn.innerText = "Gerar QR Code";
        }
    })
