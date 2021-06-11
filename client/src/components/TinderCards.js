import React, { useEffect, useState } from 'react';
import TinderCard from "react-tinder-card";
import axios from "axios";

import "./TinderCards.css";

function TinderCards() {
    const [peoples, setPeoples] = useState([]);
    const [move, setMove] = useState(null);

    const api = axios.create({
      baseURL: "http://localhost:3001"
    });

    useEffect(() => {
      async function fechData() {
        await api.get('/tinder/peoples')
          .then(response => {
            setPeoples(response.data);
          })
          .catch(err => console.log(err));
      }
      fechData();
    }, [])


    const onSwipe = (direction) => {
      console.log(direction);
      setMove(direction);
    }

    const outOfFrame = (name) => {
      console.log(name + "left");
    }

    return (
      <div className="tinder-cards">
        <div className="tinder-cards__container">
          {peoples.map((people, index) => (
              <TinderCard
                className="swipe"
                key={index}
                preventSwipe={["up", "down"]}
                onSwipe={onSwipe}
                onCardLeftScreen={() => outOfFrame(people.name)}
              >
                <div
                  className="card"
                  style={{ backgroundImage: `url('${people.imageUrl}')` }}
                >
                  <h3>{people.name}</h3>
                </div>

              </TinderCard>
          ))}
        </div>
        <h2>{move}</h2>
      </div>

    )
}

export default TinderCards
