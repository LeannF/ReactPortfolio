const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema( {
    projectName: {

    }

})

module.exports = mongoose.model('Project', Project);