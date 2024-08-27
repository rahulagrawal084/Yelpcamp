const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany();
    // let campCount = await Campground.countDocuments({});
    // console.log("here");
    // console.log(campCount);
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: "661cf462eda63f526c494888", //in yelp- camp db, give db.users.find() and take any one user object id
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            // image: "https://source.unsplash.com/collection/483251",
            description: "Rahul Agrawal is working on Yelpcamp project",
            price,
            geometry: {
                type: "Point",
                // coordinates: [-113.1331, 47.0202] //by default it will show same direction in map once we click on any campground
                // to fix this
                //it will show the exact location in map once we click on any cmapground
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            //once we restart seeds/index.js, this 2 images will be updated automatically in gui for all campgrounds
            images: [
                {
                    url: 'https://res.cloudinary.com/dhcmx420g/image/upload/v1714489941/YelpCamp/k1q5qvmx7thidxsm53db.jpg',
                    filename: 'YelpCamp/hjuf900tqs2sboimtklp'
                },
                {
                    url: 'https://res.cloudinary.com/dhcmx420g/image/upload/v1714489941/YelpCamp/mokz6vgvkwqugzirezco.jpg',
                    filename: 'YelpCamp/hv7c45iftxezprelhvul'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();  //Once database connected, connection close automatically
});
