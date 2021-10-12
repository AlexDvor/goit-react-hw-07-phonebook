import axios from 'axios';
const URL = 'http://localhost:3000/contacts';

export async function fetchContacts() {
  return await axios.get(URL).then(res => res.data);
}

export async function postContacts({ name, number }) {
  return await axios({
    method: 'post',
    url: URL,
    data: {
      name,
      number,
    },
  });
}
