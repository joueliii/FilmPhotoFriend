
const lenselist = function(req, res){
    res.render('lenses',{
        lenses:
        [
            {model: 'Pre MC lenses', year: '1958-1969/70'},
            {model: 'Early MC Rokkor', year: '1966-1972'},
            {model: 'Typical MC Rokkor', year: '1972-1975/76'},
            {model: 'Late MC Rokkor', year: '1975/76-1977'},
            {model: 'Early MD Rokkor', year: '1977-1979'},
        ]});
};

module.exports = {
    lenselist
};