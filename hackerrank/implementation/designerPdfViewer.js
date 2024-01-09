const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
const word = 'abc';

function designerPdfViewer(h, word) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let values = {};
    
    for(let i = 0; i < alfabeto.length; i ++) {
        let letra = alfabeto[i];
        values[letra] = h[i];
    }    

    let wordValues = new Array;

    for(e of word) {
        wordValues.push(values[e]);
    }

    console.log(Math.max(...wordValues) * word.length);

}
designerPdfViewer(h, word);