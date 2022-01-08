import { ImPlay3 } from "react-icons/im";
import { Link } from "react-router-dom";
import "./dashboardCard.css";

const ListOfLinks = ({ cardInfo }) => {
    cardInfo.map(card => (
        console.log(card.link)
    ))
  return (
    <div>
      {cardInfo.map((card) => (
        <li className="course__lesson">
          <button className="course__btn course__lesson--icon">
            <ImPlay3 className="course__btn--player" />
          </button>
          <Link to="/" className="course__lesson--anchor">
            <div className="course__lesson--name">{card.link}</div>
          </Link>
        </li>
      ))}
    </div>
  );
};

export const DashboardCard = ({ cardInfo }) => {
  return (
    <>
      {cardInfo.map((card) => (
        <div className="lesson" key={card.id}>
          <div className="card">
            <h2 className="card__title">{card.title}</h2>
            <p className="card__para">
              <span className="card__para--text">{card.desc}</span>
            </p>
            <div className="card__course">
              <h3 className="card__course--title">Learn</h3>
              <div className="card__course--lesson">
                <ListOfLinks cardInfo={card.links}/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
