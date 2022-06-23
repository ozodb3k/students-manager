const { connect } = require('mongoose');
const URL = 'mongodb+srv://webuser:webuser@cluster0.ug9n4.mongodb.net/students'

module.exports = async () => {
    try {
        await connect(URL);
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connection: ' + err);
    }
}