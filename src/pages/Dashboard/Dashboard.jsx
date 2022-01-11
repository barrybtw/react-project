import "./dashboard.scss";
import { authContext } from "../../context/AuthContext";
import { useContext } from "react";
import { AiFillTrophy } from "react-icons/ai";
import { DashboardCard } from "../../components/ui/DashboardCard/DashboardCard";
import { cardInfo } from "./Data";

export const Dashboard = () => {
  const { currentUser } = useContext(authContext);
  return (
    <div className="course__wrapper">
      <div className="container">
        <div className="row row__course">
          <div className="dashboard">
            <div className="progress__wrapper">
              <AiFillTrophy className="progress" />
            </div>
            <div className="dashboard__details">
              <h4 className="dashboard__details--title">
                {/* { currentUser.displayName } */}
                Jawad Hanif
              </h4>
              <div className="dashboard__detail">
                <div className="dashboard__details--para">
                  <b>0</b> of <b>35</b> lessons completed
                </div>
              </div>
              <div className="dashboard__detail">
                <div className="dashboard__details--para">
                  <b>$0</b> estimated market value
                </div>
              </div>
            </div>
          </div>
          <div className="course__content">
            <div className="course__content--main">
              <DashboardCard mainTitle="welcome" mainDesc="this is a box" cardInfo={cardInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
