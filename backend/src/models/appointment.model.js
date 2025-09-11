import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    date: {
        type: String, 
        required: true
    },
    time: {
        type: String,
        required: true
    },
    reason: {
        type: String
    }
}, { timestamps: true });

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;