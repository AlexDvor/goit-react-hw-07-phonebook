import axios from 'axios';
const BASE_URL = 'http://localhost:3000';

export async function fetchContacts() {
  return await axios.get(`${BASE_URL}/contacts`).then(res => res.data);
}

export async function postContacts({ name, number }) {
  return await axios({
    method: 'post',
    url: `${BASE_URL}/contacts`,
    data: {
      name,
      number,
    },
  });
}

export async function deleteContacts(id) {
  return await axios({
    method: 'delete',
    url: `${BASE_URL}/contacts/${id}`,
  });
}
