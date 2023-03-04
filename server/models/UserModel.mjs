import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "basic",
    enum: ["basic", "admin"],
  },
  accDetail: [
    {
      accountNum: {
        type: Number,
        unique: true,
      },
      piggyPoint: {
        type: Number,
      },
      refEarning: {
        type: Number,
      },
      piggyLink: {
        type: String,
      },
    },
    {
      savings: {
        type: Number
      },
      investment:{
        type: Number
      },
      flexDollar: {
        type: Number
      },
      flexNaira: {
        type: Number
      }
    },
  ],
  phoneNumber: {
    type: String,
  },
}, {
    timestamp: {
        
    }
});

module.exports = mongoose.model("user", userSchema);
