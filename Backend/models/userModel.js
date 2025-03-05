/*{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "phone_number": "1234567890",
  "gender": "Male",
  "date_of_birth": "1990-01-01",
  "membership_status": "active"
}
*/

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
    gender: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    membership_status: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("User", userSchema);
