import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

const Card = () => {
  return (
    <div className="cards">
      <h1>Check out Be's existence</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/2.jpg"
              text="Explore Be' existence!"
              label="Lovely Be Be"
              path="/services"
            />
            <CardItem
              src="images/5.jpg"
              text="Explore Be' existence!"
              label="Lovely Be Be"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/6.jpg"
              text="Explore Be' existence!"
              label="Lovely Be Be"
              path="/services"
            />
            <CardItem
              src="images/7.jpeg"
              text="Explore Be' existence!"
              label="Lovely Be Be"
              path="/services"
            />
            <CardItem
              src="images/9.jpg"
              text="Explore Be' existence!"
              label="Lovely Be Be"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/10.jpg"
              text="Explore Be' existence!"
              label="Lovely Be Be"
              path="/services"
            />
            <CardItem
              src="images/11.jpg"
              text="Explore Be' existence!"
              label="Lovely Be Be"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/16.jpg"
              text="Explore Be' existence!"
              label="Lovely Be Be"
              path="/services"
            />
            <CardItem
              src="images/14.jpg"
              text="Explore Be' existence!"
              label="Lovely Be Be"
              path="/services"
            />
            <CardItem
              src="images/15.jpg"
              text="Explore Be' existence!"
              label="Lovely Be Be"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/4.jpg"
              text="Explore Be' existence!"
              label="Lovely Be Be"
              path="/services"
            />
            <CardItem
              src="images/3.jpg"
              text="Explore Be' existence!"
              label="Lovely Be Be"
              path="/services"
            />
            <CardItem
              src="https://www.facebook.com/photo?fbid=2026600444474264&set=pcb.2026612171139758"
              text="Explore Be' existence!"
              label="Lovely Be Be"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
