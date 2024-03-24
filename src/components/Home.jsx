import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import planetimage from "../assets/planetimage.jpg";
import Footer from "./Footer";

const Home = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const BASE_URL =
      "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/";

    const options = {
      headers: {
        "X-RapidAPI-Key": "4d5f667ccamsh7772e0ce725f000p1a8af3jsnd4fbe5487ffc",
        "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
      },
    };

    axios
      .get(`${BASE_URL}`, options)
      .then((res) => {
        // console.log(res.data);
        setPlanets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className=" absolute top-0 left-0 w-full h-screen  "></div>
      <img className="w-full h-screen object-cover " src={planetimage} />

      <div className="top-[220px] absolute text-center text-white">
        <div>
          <h1 className="text-[100px] font-bold ">WELCOME</h1>
          <p className="text-3xl font-semibold">
            <i>To the Space of Planets</i>
          </p>
          <p className="mt-2">
            <span>Learn More About Planets in the Space</span>
          </p>
        </div>

        <div className="mt-[300px] w-full flex justify-center flex-wrap gap-10 ">
          {planets.map((planets) => (
            <div
              key={planets.id}
              className="w-[300px] h-[400px] shadow-xl rounded-xl mb-8 flex flex-col justify-between p-3 "
            >
              <img src={planets.imgSrc.img} alt="" className="rounded-xl" />
              <h1 className="text-center text-black text-[27px] font-semibold ">
                {planets.name}
              </h1>
              <div className="w-full text-center ">
                <Link to={`/details/${planets.id}`}>
                  <button className="py-1 px-5 text-center text-black shadow-xl ring-1 ring-slate-100 rounded-full hover:bg-sky-950 hover:text-white ">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
