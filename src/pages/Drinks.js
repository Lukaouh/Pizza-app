import React from "react";
import { drinkMenuList } from "../DATA/drinkMenuList";
import MenuItems from "../components/MenuItems";
import "../styles/Drinks.css";

function Drinks() {
  return (
    <div className="Drinks">
      <h1 className="drinkTitle">Drinks Menu</h1>
      <div className="DrinksItem">
        {drinkMenuList.map((drinksItems, key) => {
          return (
            <MenuItems
              name={drinksItems.name}
              price={drinksItems.price}
              image={drinksItems.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Drinks;
