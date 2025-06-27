import { createFakeContact } from '../utils/createFakeContact';
import { writeContacts } from '../utils/writeContacts';
import { readContacts } from '../utils/readContacts';
import { PATH_DB } from '../constants/contacts';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...contacts, newContact];

    await writeContacts(updatedContacts);
    console.log(`Added one new contact and saved to ${PATH_DB}`);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

addOneContact();
