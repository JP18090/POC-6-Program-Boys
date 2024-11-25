"use client";
import React, { useState, useEffect } from "react";
import seatData from "/project/workspace/seat.json";

export default function Aforja() {
  const [seats, setSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const seatPrice = 25;
  const totalSeats = 60;

  useEffect(() => {
    const initialSeats = [...Array(totalSeats)].map((_, index) => ({
      id: index + 1,
      status: "free",
    }));
    setUnavailableSeats(initialSeats);
  }, []);

  const setUnavailableSeats = (seatsArray) => {
    let pairsCount = 0;

    while (pairsCount < 8) {
      const randomIndex = Math.floor(Math.random() * (totalSeats - 1));
      const [seat1, seat2] = [
        seatsArray[randomIndex],
        seatsArray[randomIndex + 1],
      ];

      if (seat1.status === "free" && seat2?.status === "free") {
        Object.assign(seat1, { status: "unavailable" });
        Object.assign(seat2, { status: "unavailable" });
        pairsCount++;
      }
    }
    setSeats([...seatsArray]);
  };

  const handleSeatClick = (id) => {
    setSeats((prevSeats) => {
      let updatedPrice = totalPrice;

      const updatedSeats = prevSeats.map((seat) => {
        if (seat.id === id && seat.status === "free") {
          updatedPrice += seatPrice;
          return { ...seat, status: "selected" };
        } else if (seat.id === id && seat.status === "selected") {
          updatedPrice -= seatPrice;
          return { ...seat, status: "free" };
        }
        return seat;
      });

      setTotalPrice(updatedPrice);
      return updatedSeats;
    });
  };

  const handlePurchase = () => {
    if (totalPrice > 0) {
      alert(
        `Compra realizada com sucesso! Valor total: R$ ${totalPrice
          .toFixed(2)
          .replace(".", ",")}`
      );
      window.location.reload();
    } else {
      alert(
        "Nenhum assento selecionado. Por favor, selecione pelo menos um assento para realizar a compra."
      );
    }
  };

  const getLastFourSeats = () => {
    return seats.slice(-4);
  };

  const lastFourSeats = getLastFourSeats();

  return (
    <div className="container">
      <div className="left-section">
        <div className="title">{seatData.titulo}</div>
        <div className="time">{seatData.horario}</div>
        <div
          className="seats"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {seats.map((seat) => (
            <div
              key={seat.id}
              className={`seat ${seat.status} ${
                lastFourSeats.includes(seat) ? "last-four" : ""
              }`}
              onClick={() =>
                seat.status !== "unavailable" && handleSeatClick(seat.id)
              }
            />
          ))}
        </div>
        <div className="screen"></div>
        <div className="screen-label">tela</div>
        <div className="legend">
          <div className="legend-item">
            <span className="seat free"></span> livre
          </div>
          <div className="legend-item">
            <span className="seat selected"></span> selecionado
          </div>
          <div className="legend-item">
            <span className="seat unavailable"></span> indisponível
          </div>
        </div>
        <button id="buyButton" className="buy-button" onClick={handlePurchase}>
          Comprar
          <br />
          R${" "}
          <span id="total-price">
            {totalPrice.toFixed(2).replace(".", ",")}
          </span>
        </button>
      </div>
      <div className="right-section">
        <div className="synopsis">
          <h3>Sinopse do filme</h3>
          <p>{seatData.sinopse}</p>
        </div>
        <div className="details">
          <h3>Data de lançamento</h3>
          <p>{seatData.dataLancamento}</p>
          <h3>Direção</h3>
          <p>{seatData.direcao}</p>
        </div>
      </div>
    </div>
  );
}
