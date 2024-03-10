module.exports = (req, res, next) => {
    if(req.body.client) {
        console.log(`Você postou ${req.body.client}`);
    }
    next();
}