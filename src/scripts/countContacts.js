import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  return contacts.length;
};
const runCount = async () => {
  const count = await countContacts();
  console.log(`Total contacts: ${count}`);
};
runCount();
