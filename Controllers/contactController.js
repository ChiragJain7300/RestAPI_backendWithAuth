const contactModel = require("../Models/contact.model");
const asyncHandler = require("express-async-handler");
//@desc get all contacts
//@path GET /api/contacts
//@access public
const getAllContacts = asyncHandler(async (req, res) => {
  const allContacts = await contactModel.find();
  res.status(200).json({ message: "Success", contacts: allContacts });
});

//@desc create a new contact
//@path POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, number } = req.body;
  if (!name || !email || !number) {
    res.status(400);
    throw new Error("All fields are necessary");
  }
  const contact = await contactModel.create(req.body);
  res.status(201).json(contact);
});

//@desc create contact info by Id
//@path GET /api/contacts
//@access public
const getContactById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const indiContact = await contactModel.find({ _id: id });
  if (Object.keys(indiContact).length === 0) {
    res.status(404);
    throw new Error("The contact does not exist");
  } else res.status(201).json(indiContact);
});

//@desc create a new contact
//@path POST /api/contacts
//@access public
const updateContact = asyncHandler(async (req, res) => {
  const indiContact = await contactModel.findById(req.params.id);
  if (!indiContact) {
    res.status(404);
    throw new Error("The contact doesnot exist");
  } else {
    const updatedContact = await contactModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(201).json(updatedContact);
  }
});

//@desc create a new contact
//@path POST /api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const deletedContact = await contactModel.findByIdAndDelete(req.params.id);
  if (!deletedContact) {
    res.status(404);
    throw new Error("The contact doesnot exist");
  }
  res.status(200).json(deletedContact);
});
module.exports = {
  getAllContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
