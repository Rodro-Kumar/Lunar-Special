import React from "react";

const Card = ({
  Classname,
  CardTitle,
  CardPost,
  CardAddress,
  CardInfo,
  children,
}) => {
  return (
    <>
      <div className={Classname}>
        <div className="card__title">
          {CardTitle ? CardTitle : "Tim Haldorsson"}
        </div>
        <div className="card__post">
          {CardPost ? CardPost : "Paid Search Manager"}
        </div>
        <div className="card__address">
          {CardAddress ? CardAddress : "Gothenburg, Sweden"}
        </div>
        <div className="card__info">
          {CardInfo ? CardInfo : "tim@lunarstrategy.com"}
        </div>
        {children}
      </div>
    </>
  );
};

export default Card;
