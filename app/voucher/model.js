const mongoose = require("mongoose");
let voucherSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nama game harus diisi"],
  },
  status: {
    type: String,
    enum: ["Y", "N"],
    default: "Y",
  },
  thumbnial: {
    type: String,
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
  nominals: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Nominal",
    },
  ],

  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Voucher", voucherSchema);
