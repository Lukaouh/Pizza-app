import React from "react";
import { menuList } from "../DATA/menuList";
import MenuItems from "../components/MenuItems";
import { Link } from "react-router-dom";
import "../styles/Menu.css";
function Menu() {
  return (
    <div className="menu">
      <h1 className="listTitle">Our Menu</h1>
      <div className="menuList">
        {menuList.map((items, key) => {
          return (
            <MenuItems
              key={items.index}
              name={items.name}
              price={items.price}
              image={items.image}
            />
          );
        })}
      </div>
      <div className="MenuBTN">
        <Link to="/drinks">
          <button>DRINKS MENU</button>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
