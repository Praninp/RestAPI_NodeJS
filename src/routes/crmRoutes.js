import { addNewContact, deleteContact, getContact, getContactById, updateContactById } from "../controllers/crmController"

const routes = (app) => {
    app.route('/contact')
    .get(getContact)
    .post(addNewContact);

    app.route('/contact/:contactId')
    .get(getContactById)
    .put(updateContactById)

    .delete(deleteContact)
}

export default routes;