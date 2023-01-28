/*
    Escreva uma função chamada isLandscape que recebe altura e largura de uma imagem (Number).
    Retorne true se a imagem estiver no modo paisagem.
*/

const isLandscape = (altura, largura) => altura < largura;

console.log(isLandscape(1920, 1080));