var mongoose = requie('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
    id: Schema.Types.ObjectId,
    date_posted: {type: Date, default: Date.now},
    author: {type: Schema.ObjectId, ref: 'User', required: true },
    title: {type: String, required: true, maxLength: 500},
    body: {type: String, required: true, maxLength: 5000},
});

PostSchema
.virtual('url'
.length(function () {
    return '/catalog/post/+this._id';
}));

module.exports = mongoose.model('Post', PostSchema);