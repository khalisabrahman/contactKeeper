const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Using promises and .then
// const connectDB = () => {
//     mongoose.connect(db, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true
//     }).then(() => console.log('MongoDB Connected'))
//     .catch (err => {
//         console.error(err.message);
//         process.exit(1);
//     })
// }

// Using async await
const connectDB = async () => {
    try {
        mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connected');
    } catch (error) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;