import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        fullname: {
            type: String,
            required: true, // Full name of the user
            trim: true                  
        },
        age: {
            type: Number,
            required: true, // Age of the user
            min: 0, // Age cannot be negative
            max: 120, // Assuming a maximum age limit
        },
        gender: {
            type: String,
            required: true, // Gender of the user
            enum: ["male", "female", "other"],
            trim: true // Remove whitespace from email
        },
        phone: {
            type: String,
            required: true, // Phone number of the user
            maxlength: 10, // Assuming a maximum length for phone numbers
            trim: true // Remove whitespace from email
        },
        email:{
            type:String,
            required: true, // Email address of the user
            unique: true, // Email must be unique
            lowercase: true, // Store email in lowercase
            trim: true // Remove whitespace from email
        },
        address: {
            type: String,
            required: true, // Address of the user
            trim: true // Remove whitespace from address
        },
        city: {
            type: String,
            required: true, // City of the user
            trim: true // Remove whitespace from city
        },
        postalcode: {
            type: String,
            required: true, // Zip code of the user 
            trim: true // Remove whitespace from zip
        },
        password: {
            type: String,
            required: true, // Password of the user
            minlength: 8, // Password must be at least 8 characters long
            trim: true // Remove whitespace from password
        },
        bloodgroup: {
            type: String,
            required: true, // Blood group of the user
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            trim: true // Remove whitespace from blood group
        },
        weight: {
            type: Number,
            required: true, // Weight of the user
            min: 0, // Weight cannot be negative
            max: 500, // Assuming a maximum weight limit
        },
        allergies: {
            type: String,
            required: false, // Allergies of the user
            trim: true // Remove whitespace from allergies
        },
        medicalhistory: {
            type: String,
            required: false, // Medical history of the user
            trim: true // Remove whitespace from medical history
        },
        medications: {
            type: String,
            required: false, // Current medications of the user
            trim: true // Remove whitespace from medications
        },
        surgeries: {
            type: String,
            required: false, // Past surgeries of the user
            trim: true // Remove whitespace from surgeries
        },
        familyhistory: {
            type: String,
            required: false, // Family medical history of the user ex:- heart disease, diabetes
            trim: true // Remove whitespace from family history
        },
        lifestyle: {
            type: String,
            required: false, // Lifestyle habits of the user (e.g., smoking, alcohol)
            trim: true // Remove whitespace from lifestyle
        },
        idproof: {
            type: [String], // Array of URLs or paths to medical documents
            required: true, // Medical documents uploaded by the user
            trim: true // Remove whitespace from document URLs
        },
        prescription: {
            type: [String], // Array of URLs or paths to medical documents
            required: false, // Medical documents uploaded by the user
            trim: true // Remove whitespace from document URLs
        },
        emergencycontactname: {
            type: String,
            required: true, // Name of the emergency contact
            trim: true // Remove whitespace from name
        },
        relationship: {
            type: String,
            required: true, // Relationship with the user
            trim: true // Remove whitespace from relationship
        },
        emergencycontactphone: {
            type: String,
            required: true, // Phone number of the emergency contact
            maxlength: 10, // Assuming a maximum length for phone numbers
            trim: true // Remove whitespace from phone
        }
   },
        {
            timestamps: true // Automatically manage createdAt and updatedAt fields
        }
   );

const User = mongoose.model("User", userSchema);

export default User;
