
const cameralist = function(req, res){
    res.render('cameras',{
        cameras:
        [
            {model: 'Minolta SR-2', year: '1958-1960'},
            {model: 'Minolta SR-1', year: '1959-1971'},
            {model: 'Minolta SR-3', year: '1960-1962'},
            {model: 'Minolta SR-7', year: '1962-1966'},
            {model: 'Minolta SR-1s', year: '1967-?'},
        ]});
};
module.exports = {
    cameralist
};