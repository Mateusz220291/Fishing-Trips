import CardItem from "./CardItem";
import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Sprawdź najbardziej łowne akweny na świecie</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/pike.jpg"
              text="Złów największego szczupaka w życiu na szwedzkich szkierach"
              label="Szczupak"
              path="/services"
            />
            <CardItem
              src="images/perch.jpg"
              text="Zmierz się z pasiakami na hiszpańskim jeziorze gigantów"
              label="Okoń"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/catfish.jpg"
              text="Rzuć wyzwanie potężnym sumom z Ebro."
              label="Sum"
              path="/services"
            />
            <CardItem
              src="images/zander.jpg"
              text="Zapoluj na mętnookiego drapieżnika w pięknych okolicznościach przyrody."
              label="Sandacz"
              path="/services"
            />
            <CardItem
              src="images/taimen.jpg"
              text="Rosyjska ruletka z nieprzewidywalnym kuzynem łososia."
              label="Tajmień"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
