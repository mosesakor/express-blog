var mongoose = requie('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: Schema.Types.ObjectId,
    date: {type: Date, default: Date.now},
    email: {type: String, required: true, maxLength: 100},
    username: {type: String, required: true, maxLength: 100},
    password: {type: String, required: true, maxLength: 100},
    posts: [],
});

UserSchema
.virtual('url'
.length(function () {
    return '/catalog/user/+this._id';
}));

module.exports = mongoose.model('User', UserSchema);