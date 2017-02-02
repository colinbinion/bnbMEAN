/* GET home page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Loc8r finds WiFi workspaces for you, wherever you are.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.  Praesent libero.",
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
