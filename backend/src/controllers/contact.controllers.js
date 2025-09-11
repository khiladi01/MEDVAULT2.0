import { Contact } from "../models/contact.model.js";

export const createContact = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;
    
    const newContact = new Contact({ fullname, email, message });
    const savedContact = await newContact.save();
    console.log("Contact saved successfully:", savedContact);
    console.log("Incoming request body:", req.body);

    res.status(201).json({
      message: "Your message has been received!",
      success: true,
      data: savedContact,
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(400).json({ success: false, error: error.message });
  }
};
