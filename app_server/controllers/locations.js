/* GET home page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Lorem ipsum',
            address: '987 Lookout Mountain Rd, Golden, CO 80401',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi', 'Goat milk'],
            distance: '100m'
        }, {
            name: 'Lorem ipsum2',
            address: '987 Lookout Mountain Rd, Golden, CO 80401',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        }, {
            name: 'Lorem ipsum3',
            address: '987 Lookout Mountain Rd, Golden, CO 80401',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};

/* GET location info page */
module.exports.locationInfo = function(req, res){
  res.render('location-info', { title: 'Location info' });
};

/* GET add review page */
module.exports.addReview = function(req, res){
  res.render('location-review-form', { title: 'Add review' });
};
