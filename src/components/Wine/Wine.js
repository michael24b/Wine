import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Wine.module.css";

const Wine = () => {
  const params = useParams();

  const [curWine, setCurWine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const search = async () => {
      const res = await fetch(
        `https://api.sampleapis.com/wines/${params.wineId}`
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await res.json();
      setCurWine(data);
      setIsLoading(false);
    };

    search();
  }, [params.wineId]);

  const wineList = curWine.map((wine) => (
    <li key={wine.id}>
      <div className={classes.card}>
        <div className={classes.imgDiv}>
          <img
            className={classes.img}
            alt={wine.wine}
            src={wine.image.length ? wine.image : "No Image!"}
          />
        </div>
        <div className={classes.wineInfo}>
          <div className={classes.wineName}>
            {wine.wine.length > 17
              ? `${wine.wine.substring(0, 20)}...`
              : `${wine.wine}`}
          </div>

          <div className={classes.wineryName}>{wine.winery}</div>
          <div className={classes.wineryName}>{wine.location}</div>
        </div>
        <div className={classes.wineRate}>
          {"☆".repeat(Number.parseFloat(wine.rating.average) + 1)}
        </div>
      </div>
    </li>
  ));
  return (
    <section className={classes.wineContainer}>
      {isLoading ? <LoadingSpinner /> : wineList}
    </section>
  );
};

export default Wine;
