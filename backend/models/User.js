const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true],
    match: [/^\S+@\S+\.\S+$/, "Not a valid email format"],
  },
  name: String,
  hash: String,
  salt: String,
  favorites: [{ type: Schema.Types.ObjectId, ref: "Movie", default: [] }],
});
userSchema.methods.generateHashPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
};

userSchema.methods.validPassword = function (password) {};

const User = mongoose.model("User", userSchema);

module.exports = User;

// required with [] means there are other possible options besides true.
// match is regex == checks if I entered a valid email
// hash is password encripted.
// concatenation using hashing (password)
// favorites = like a foreignKey table (its an array of my fav movies)
// this salt == generates a random string (good practice for securing the password)

//user Schema methods == for changing data before saving it. Im telling to the mongodb == if password comes as string == concatenate it with Salt etc before saving it in our bbdd
