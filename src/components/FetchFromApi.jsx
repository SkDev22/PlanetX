import axios from "axios";
// import dotenv from ("dotenv").config()

const BASE_URL =
  "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/";

const options = {
  headers: {
    "X-RapidAPI-Key": "4d5f667ccamsh7772e0ce725f000p1a8af3jsnd4fbe5487ffc",
    "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
  },
};

const fetchFromAPI = () => {
  axios
    .get(`${BASE_URL}`, options)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchFromAPI;
