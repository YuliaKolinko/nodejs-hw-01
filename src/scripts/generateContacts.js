import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updatedContacts = [...contacts, ...newContacts];

    await writeContacts(updatedContacts);
    console.log(`Generated ${number} new contacts and saved to ${PATH_DB}`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
