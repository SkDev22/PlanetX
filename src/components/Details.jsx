import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";

const Details = () => {
  const [planet, setPlanet] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const BASE_URL = `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/${id}`;

    const options = {
      headers: {
        "X-RapidAPI-Key": "4d5f667ccamsh7772e0ce725f000p1a8af3jsnd4fbe5487ffc",
        "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
      },
    };

    axios
      .get(`${BASE_URL}`, options)
      .then((res) => {
        console.log(res.data);
        setPlanet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <div className="md:px-28 px-5 absolute mt-20">
        <div className="flex justify-between mt-10 flex-col md:flex-row items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold my-5 text-center md:text-start">
              {planet.name}
            </h1>
            {planet && planet.imgSrc && (
              <img
                className="w-[400px] h-[400px] rounded-lg "
                src={planet.imgSrc.img}
                alt=""
              />
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-xl mt-10 font-bold">About {planet.name} </h1>
            <p className="mt-3">{planet.description}</p>
            <div>
              <h1 className="mt-5 text-xl font-bold">Basic Details</h1>
              {planet && planet.basicDetails && (
                <h1 className="mt-3 mb-2">
                  Volume : {planet.basicDetails.volume}
                </h1>
              )}
              {planet && planet.basicDetails && (
                <h1>Mass : {planet.basicDetails.mass}</h1>
              )}
              <button className="mt-7 w-[200px] py-2 px-8 bg-sky-950 text-white rounded-xl ">
                <a href={planet.wikiLink}> Wikipedia </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
