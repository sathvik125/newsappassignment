import React, { useEffect, useState } from "react";
import MainPageNavbar from "./NavBar";
import "./MainPage.css";
import Carousel from "react-bootstrap/Carousel";
import { getTopHeadlines, getNewsData } from "../api";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import {image} from "../../public/logo192.png"
// getTopHeadlines

export const MainPage = () => {
  const [data, setData] = useState([]);
  const [lang, setlang] = useState("English");
  const [searchterm, setsearchterm] = useState("example");
  const [category, setcategory] = useState("general");
  useEffect(() => {
    console.log(searchterm);
    console.log(category);
  }, [searchterm, category]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await getNewsData(category, "en", searchterm);
        console.log(response1);
        setcardsdata(response1);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await getTopHeadlines(category, "en", searchterm); // Assuming getTopHeadlines is defined and returns a promise
        setData(response);
        console.log(response);
      } catch (error) {
        setData([]);
        setcardsdata([]);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchterm, category]);
  const [cardsdata, setcardsdata] = useState([]);

  return (
    <div>
      <MainPageNavbar
        setlang1={setlang}
        setsearchterm={setsearchterm}
        setcategory={setcategory}
      />
      {/* MainPage */}
      {(lang !== "English" || !data || data.length === 0) && (
        <div style={{ paddingTop: "3rem" }}>
          <img
            src="https://img.freepik.com/premium-vector/no-data-found-empty-file-folder-concept-design-vector-illustration_620585-1698.jpg"
            alt="No Data Found"
          />
        </div>
      )}{" "}
      {(lang === "English" || data.length !== 0) && (
        <>
          <h1>Latest Headlines</h1>
          <Carousel data-bs-theme="dark">
            {data &&
              data.length > 0 &&
              data.map(
                (
                  article,
                  index // Check if articles exist
                ) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 "
                      src={article.image}
                      alt={`Slide ${index + 1}`}
                      style={{ height: "50rem", objectFit: "cover" }} // Adjusted image size and fit
                    />
                    <Carousel.Caption>
                      <h5>{article.title}</h5>
                      <p>{article.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              )}
          </Carousel>
          <div style={{ padding: "5rem" }}>
            <div className="row">
              {cardsdata &&
                cardsdata.length &&
                cardsdata.map((card, index) =>
                  index % 5 === 0 && index !== 0 ? (
                    <div className="w-100" key={index}></div>
                  ) : null
                )}
              {cardsdata &&
                cardsdata.length &&
                cardsdata.map((card, index) => (
                  <div className="col mb-4" key={index}>
                    <div
                      className="card"
                      style={{
                        width: "22rem",
                        height: "25rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <img
                        className="card-img-top"
                        style={{ height: "10rem" }}
                        src={card.image}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {card.title}
                        </h5>
                        <p className="card-text">
                          {card.description.length > 100
                            ? `${card.description.slice(0, 100)}...`
                            : card.description}
                        </p>

                        <a
                          style={{
                            position: "absolute",
                            bottom: "1rem",
                            right: "7rem",
                          }}
                          href={card.url}
                          className="btn btn-primary"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
