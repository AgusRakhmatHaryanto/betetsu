function errorHandler(err, req, res, next) {
    if (err) {
        console.log(err.stack);
        console.log(err.message);
        res.status(500).send(err.message);
    }
}

module.exports = {errorHandler}