const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const employeeSchema = new mongoose.Schema({
   firstname: {
      type: String,
      required: true
   },
   lastname: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   phone: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true,
   },
   confirmpassword: {
      type: String,
      required: true,
   },
   gender: {
      type: String,
      required: true
   }
})

// secure password with bcryptjs before save to database 

employeeSchema.pre("save", async function (next) {
   if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
      console.log(`the hash password is ${this.password}`);
      this.confirmpassword = undefined;

   }
   next();
})

//now we need to create collections
const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;