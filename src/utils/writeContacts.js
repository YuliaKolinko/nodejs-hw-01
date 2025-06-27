import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), {
      encoding: 'utf-8',
    });
    console.log('Contacts updated successfully');
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
};
