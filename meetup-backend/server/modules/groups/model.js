import mongoose, { Schema } from 'mongoose'

const GroupSchema = new Schema({
   name: {
      type: String,
      required: true,
      unique: true,
      minLength: [ 5, 'Name must be 5 characters long' ] //The string in the array will be the error message from mongo
   },
   description: {
      type: String,
      required: true,
      minLength: [ 10, 'Name must be 10 characters long' ]
   },
   category: {
      type: String
   },
   meetups: [{
      type: Schema.Types.ObjectId,
      ref: 'Meetup'
   }]
}, { timestamps: true })

export default mongoose.model('Group', GroupSchema)