function catAndMouse(x, y, z) {
    let dx = Math.abs(x - z);
    let dy = Math.abs(y - z);

    if(dx < dy) return "Cat A";
    if(dy < dx) return "Cat B";
    return "Mouse C";
    
}