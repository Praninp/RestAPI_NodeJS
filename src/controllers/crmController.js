import mongoose from "mongoose";
import {ContactSchema} from "../models/crmModel"

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact =(req, res) => {
    let newContact = new Contact(req.body);
    newContact.save().then((err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContact = (req, res) => {
    Contact.find().then((err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContactById = (req, res) => {
    Contact.findById(req.params.contactId).then((err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const updateContactById = (req, res) => {
    Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new : true}).then((err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const deleteContact = (req, res) => {
    Contact.findOneAndRemove({_id: req.params.contactId}).then((err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json({message : 'Successfully deleted contact'});
    });
};