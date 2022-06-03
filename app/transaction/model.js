const mongoose = require("mongoose");
let transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: { type: String, require: [true, "nama game harus diisi"] },
      category: { type: String, require: [true, "nama kategori harus diisi"] },
      thumbnail: { type: String },
      coinName: { type: String, require: [true, "nama koin harus diisi"] },
      coinQuantity: {
        type: String,
        require: [true, "jumlah koin harus diisi"],
      },
      price: { type: Number },
    },

    historyPayment: {
      name: { type: String, require: [true, "nama harus diisi"] },
      type: { type: String, require: [true, "tipe pembayaran harus diisi"] },
      bankName: {
        type: String,
        require: [true, "nama bank pembayaran harus diisi"],
      },
      noRekening: {
        type: String,
        require: [true, "nomor rekening kategori harus diisi"],
      },
    },

    name: {
      type: String,
      require: [true, "nama harus diisi"],
      maxLength: [225, "panjang nama harus antara 3 - 225 karakter"],
      minLength: [3, "panjang nama harus antara 3 - 225 karakter"],
    },

    accountUser: {
      type: String,
      require: [true, "nama akun harus diisi"],
      maxLength: [225, "panjang nama harus antara 3 - 225 karakter"],
      minLength: [3, "panjang nama harus antara 3 - 225 karakter"],
    },

    tax: {
      type: Number,
      default: 0,
    },

    value: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },

    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },

    historyUser: {
      name: { type: String, require: [true, "nama player harus diisi"] },
      phoneNumber: {
        type: Number,
        require: [true, "nama akun harus diisi"],
        maxLength: [13, "panjang nama harus antara 9 - 13 karakter"],
        minLength: [9, "panjang nama harus antara 9 - 13 karakter"],
      },
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
