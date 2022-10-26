import { Link, useLocation } from "react-router-dom";
import classes from "./WineCategories.module.css";

const wineArray = [
  {
    id: "reds",
    name: "Reds",
    img: "https://images.ctfassets.net/8x8155mjsjdj/1af9dvSFEPGCzaKvs8XQ5O/a7d4adc8f9573183394ef2853afeb0b6/Copy_of_Red_Wine_Blog_Post_Header.png",
  },
  {
    id: "whites",
    name: "Whites",
    img: "https://imageio.forbes.com/specials-images/imageserve/5f43fa32af3afc498c7f81ce/Wine-/960x0.jpg?format=jpg&width=960",
  },
  {
    id: "sparkling",
    name: "Sparkling",
    img: "https://io.dropinblog.com/uploaded/blogs/34240221/files/featured/non-alcoholic-champagne-feature.jpg",
  },
  {
    id: "rose",
    name: "Rose",
    img: "https://www.countryandtownhouse.com/wp-content/uploads/2020/06/GettyImages-1081090938-600x400.jpg",
  },
];

const WineCategories = () => {
  const wineInfo = wineArray.map((wine) => (
    <li key={wine.id}>
      <Link to={`/welcome/${wine.id}`} className={classes.linkStyle}>
        <div className={classes.card}>
          <div className={classes.imgDiv}>
            <img className={classes.img} src={wine.img} alt={wine.img} />
          </div>
          <div className={classes.cardName}>{wine.name}</div>
        </div>
      </Link>
    </li>
  ));

  return <div className={classes.categoriesContainer}>{wineInfo}</div>;
};

export default WineCategories;
