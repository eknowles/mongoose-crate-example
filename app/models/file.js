var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crate = require('mongoose-crate');
var S3 = require('mongoose-crate-s3');
var env = process.env.NODE_ENV || 'development';


var FileSchema = new Schema({
    title: String,
    description: String
});

FileSchema.plugin(crate, {
    storage: new S3({
        key: process.env.KEY,
        secret: process.env.SECRET,
        bucket: process.env.BUCKET,
        acl: 'public-read', // defaults to public-read
        region: 'eu-west-1', // defaults to us-standard
        path: function(attachment) { // where the file is stored in the bucket - defaults to this function
            return '/' + attachment.name
        }
    }),
    fields: {
        file: {}
    }
});

module.exports = mongoose.model('File', FileSchema);