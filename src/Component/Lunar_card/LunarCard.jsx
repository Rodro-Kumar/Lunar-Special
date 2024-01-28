import React from "react";
import "../Lunar_card/LunarCard.css";
import Button from "../CommonComponent/Button/Button";
import Card from "../CommonComponent/Card/Card";
import user from "../../assets/man.png";
import { FaAngleRight } from "react-icons/fa6";

const LunarCard = () => {
  return (
    <>
      <div className="lunarCard">
        <div className="container">
          <div className="lunarCard__wraper">
            <div className="card">
              <div className="user">
                <picture>
                  <img src={user} alt={user} />
                </picture>
              </div>
              <Card
                Classname="user_card"
                CardTitle="Tim Haldorsson"
                CardPost="Paid Search Manager"
                CardAddress="Gothenburg, Sweden"
                CardInfo="tim@lunarstrategy.com"
              >
                <Button btnStyle="card__btn">
                  Book a free meeting
                  <FaAngleRight className="right__arrow__icon" />
                </Button>
              </Card>
            </div>
            <div className="card">
              <div className="user">
                <picture>
                  <img src={user} alt={user} />
                </picture>
              </div>
              <Card
                Classname="user_card"
                CardTitle="Tim Haldorsson"
                CardPost="Paid Search Manager"
                CardAddress="Gothenburg, Sweden"
                CardInfo="tim@lunarstrategy.com"
              >
                <Button btnStyle="card__btn">
                  Book a free meeting
                  <FaAngleRight className="right__arrow__icon" />
                </Button>
              </Card>
            </div>
            <div className="card">
              <div className="user">
                <picture>
                  <img src={user} alt={user} />
                </picture>
              </div>
              <Card
                Classname="user_card"
                CardTitle="Tim Haldorsson"
                CardPost="Paid Search Manager"
                CardAddress="Gothenburg, Sweden"
                CardInfo="tim@lunarstrategy.com"
              >
                <Button btnStyle="card__btn">
                  Book a free meeting
                  <FaAngleRight className="right__arrow__icon" />
                </Button>
              </Card>
            </div>
            <div className="card">
              <div className="user">
                <picture>
                  <img src={user} alt={user} />
                </picture>
              </div>
              <Card
                Classname="user_card"
                CardTitle="Tim Haldorsson"
                CardPost="Paid Search Manager"
                CardAddress="Gothenburg, Sweden"
                CardInfo="tim@lunarstrategy.com"
              >
                <Button btnStyle="card__btn">
                  Book a free meeting
                  <FaAngleRight className="right__arrow__icon" />
                </Button>
              </Card>
            </div>
            <div className="card">
              <div className="user">
                <picture>
                  <img src={user} alt={user} />
                </picture>
              </div>
              <Card
                Classname="user_card"
                CardTitle="Tim Haldorsson"
                CardPost="Paid Search Manager"
                CardAddress="Gothenburg, Sweden"
                CardInfo="tim@lunarstrategy.com"
              >
                <Button btnStyle="card__btn">
                  Book a free meeting
                  <FaAngleRight className="right__arrow__icon" />
                </Button>
              </Card>
            </div>
            <div className="card">
              <div className="user">
                <picture>
                  <img src={user} alt={user} />
                </picture>
              </div>
              <Card
                Classname="user_card"
                CardTitle="Tim Haldorsson"
                CardPost="Paid Search Manager"
                CardAddress="Gothenburg, Sweden"
                CardInfo="tim@lunarstrategy.com"
              >
                <Button btnStyle="card__btn">
                  Book a free meeting
                  <FaAngleRight className="right__arrow__icon" />
                </Button>
              </Card>
            </div>
            <div className="card">
              <div className="user">
                <picture>
                  <img src={user} alt={user} />
                </picture>
              </div>
              <Card
                Classname="user_card"
                CardTitle="Tim Haldorsson"
                CardPost="Paid Search Manager"
                CardAddress="Gothenburg, Sweden"
                CardInfo="tim@lunarstrategy.com"
              >
                <Button btnStyle="card__btn">
                  Book a free meeting
                  <FaAngleRight className="right__arrow__icon" />
                </Button>
              </Card>
            </div>
            <div className="card">
              <div className="user">
                <picture>
                  <img src={user} alt={user} />
                </picture>
              </div>
              <Card
                Classname="user_card"
                CardTitle="Tim Haldorsson"
                CardPost="Paid Search Manager"
                CardAddress="Gothenburg, Sweden"
                CardInfo="tim@lunarstrategy.com"
              >
                <Button btnStyle="card__btn">
                  Book a free meeting
                  <FaAngleRight className="right__arrow__icon" />
                </Button>
              </Card>
            </div>
            <div className="card">
              <div className="user">
                <picture>
                  <img src={user} alt={user} />
                </picture>
              </div>
              <Card
                Classname="user_card"
                CardTitle="Tim Haldorsson"
                CardPost="Paid Search Manager"
                CardAddress="Gothenburg, Sweden"
                CardInfo="tim@lunarstrategy.com"
              >
                <Button btnStyle="card__btn">
                  Book a free meeting
                  <FaAngleRight className="right__arrow__icon" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LunarCard;
