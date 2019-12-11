const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      // trim whitespace off
      trim: true,
      minlength: 3
    }
  },
  {
    // when it was created/modified
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
