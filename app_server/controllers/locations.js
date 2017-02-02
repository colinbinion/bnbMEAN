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
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Lorem ipsum',
        pageHeader: {
            title: 'Lorem ipsum'
        },
        sidebar: {
            context: 'is on Loc8r because it has wifi and workspace to sit with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review.'
        },
        location: {
            name: 'Lorem ipsum',
            address: '987 Lookout Mountain Rd, Golden, CO 80401',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi', 'Goat milk'],
            coords: {
                lat: 39.7326,
                lng: 105.2383
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Kent Getrite',
                rating: 5,
                timestamp: '16 July 2016',
                reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
            }, {
                author: 'Mr. Robot',
                rating: 3,
                timestamp: '16 June 2016',
                reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
            }]
        }
    });
};

/* GET add review page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Lorem ipsum on Loc8r',
        pageHeader: {
            title: 'Review Lorem ipsum'
        }
    });
};
