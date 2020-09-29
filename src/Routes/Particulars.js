import axios from "axios";

const url = "http://localhost:5000/api/v1/particulars";

/*
Fetch all particulars
Params required none
*/
const fetchParticulars = async () => {
  const response = await axios.get(url);
  return response;
};
/*
Add a particular 
*/

const addParticular = async ({ firstName, lastName, job, gender }) => {
  const response = await axios.post(
    url,
    { firstName, lastName, job, gender },
  );
  return response;
};

/*
Update a specific particular base on id
*/
const editParticular = async ({ id, firstName, lastName, job, gender }) => {
  const response = await axios.put(
    `${url}/${id}`,
    { firstName, lastName, job, gender },
  );
  return response;
};

/*
Delete a specific particular base on id
*/
const deleteParticular = async (id) => {
  const response = await axios.delete(`${url}/${id}`);
  return response;
};

export {
  fetchParticulars,
  addParticular,
  editParticular,
  deleteParticular,
};
