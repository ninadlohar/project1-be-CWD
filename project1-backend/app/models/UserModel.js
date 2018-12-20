const mongoose = require('mongoose')

let Schema = mongoose.Schema

let userSchema = new Schema({
  firstName: {
    type: String,
    default: '',
    minlength: 3,
    maxlength: 15
  },
  userId: {
    required: true,
    unique: true,
    index: true,
    default: '',
    type: String
  },
  userName: {
    required: true,
    unique: true,
    index: true,
    type: String,
    minlength: 3,
    maxlength: 15
  },
  lastName: {
    type: String,
    default: '',
    minlength: 3,
    maxlength: 15
  },
  mobileNumber: {
    type: Number,
    default: '',
    minlength: 10,
    maxlength: 10,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  countryName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    default: 'password'
  },

  isAdmin: {
    type: Boolean,
    default: '',
  },
  createdOn: {
    type: Date,
    default: ''
  }
})

mongoose.model('User', userSchema)