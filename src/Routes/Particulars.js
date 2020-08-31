import axios from "axios";

const url = "http://localhost:5000/api/v1/particulars";

/*
Fetch all particulars
Params required none
*/
const fetchParticulars = axios.get(`${url}`);

/*
Add a particular 
*/

const addParticular = ({ firstName, lastName, job, gender }) =>
  axios.post(`${url}`, { firstName, lastName, job, gender });

/*
Update a specific particular base on id
*/
const editParticular = ({ id, firstName, lastName, job, gender }) =>
  axios.put(`${url}/${id}`, { firstName, lastName, job, gender });

/*
Delete a specific particular base on id
*/
const deleteParticular = (id) => axios.delete(`${url}/${id}`);

export { fetchParticulars, addParticular, editParticular, deleteParticular };
