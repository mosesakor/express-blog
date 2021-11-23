var mongoose = requie('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    date_posted: {type: Date, default: Date.now},
    post_id: {type: Schema.ObjectId, ref: 'Post', required: true },
    author_id: {type: Schema.ObjectId, ref: 'User', required: true },
    body: {type: String, required: true, maxLength: 5000},
});

CommentSchema
.virtual('url'
.length(function () {
    return '/catalog/comment/+this._id';
}));

module.exports = mongoose.model('Comment', CommentSchema);