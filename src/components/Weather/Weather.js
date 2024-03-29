import React, { useState } from "react";
import { styled } from "styled-components";
import LinearProgress from "@mui/material/LinearProgress";

const Button = styled.button`
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
`;
const WeatherInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid white;
  outline: none;
  font-size: 18px;
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid white;
  }
`;
const WeatherContainer = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: #681f8f;
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: white;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const api = {
  key: "64a622f76c6aae4f47f3ee261b68b31d",
  base: "https://api.openweathermap.org/data/2.5",
  img: "https://openweathermap.org/img/wn",
};

const Weather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //let imageUrl = ``;
  const searchPressed = () => {
    setLoading(true);
    fetch(
      `${api.base}/weather?q=${search}&units=metric&lang=pl&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === "404") {
          setError(`Miasto ${search} nie zostało znalezione.`);
          setWeather({});
        } else {
          setWeather(result);
          setError("");
        }
      })
      .catch((error) => {
        console.error("Błąd podczas żądania API:", error.message);
        setError("Wystąpił błąd. Spróbuj ponownie później.");
        setWeather({});
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <WeatherContainer>
      <WeatherInput
        type="text"
        placeholder="Wpisz swoje miasto"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></WeatherInput>
      <Button onClick={searchPressed}>Wyszukaj</Button>
      <Desc>
        {loading && <LinearProgress />}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Desc>
      {typeof weather.main !== "undefined" ? (
        <Desc>
          <p>
            {weather.name} - aktualnie jest {weather.main.temp} °C,
          </p>
          <p>odczuwalne {weather.main.feels_like} °C</p>
          <img
            src={api.img + `/${weather.weather[0].icon}@2x.png`}
            alt="text"
          />
          <p>{weather.weather[0].description}</p>
          <p>Średnia prędkość wiatru: {weather.wind.speed} m/s</p>
        </Desc>
      ) : (
        ""
      )}
    </WeatherContainer>
  );
};

export default Weather;
