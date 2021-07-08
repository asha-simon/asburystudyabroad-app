import axios from 'axios';
import { baseUrl } from '../Constants/index';

export const addMainCourseStrteam = data => {
  axios.post(`${baseUrl}/categories/add`, data)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
}

export const fetchMainCourseStreams = data => {
  axios.get(`${baseUrl}/categories`, data)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
}