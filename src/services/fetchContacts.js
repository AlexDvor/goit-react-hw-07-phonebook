import axios from 'axios';
const URL = 'http://localhost:3000/contacts';

export const fetchContacts = () => {
  return axios.get(URL).then(res => res.data);
};

export const postContacts = (name, number) => {
  return axios({
    method: 'post',
    url: URL,
    data: {
      name,
      number,
    },
  });
};
