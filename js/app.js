let walletOpen = document.getElementById("walletOpen");
let textModal = document.getElementById("textModal");
let openWallet=()=>{
    walletOpen.classList.toggle("hide-it")
}
let openText=()=>{
    
    walletOpen.classList.add("hide-it")
    textModal.classList.toggle("hide-it")
}