import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/PrepareMenu.module.css";

export const PrepareMenu: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroup1Click = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularStaysForm']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.prepareMenuDiv}>
      <div className={styles.prepareForYourTrip}>Prepare for your trip</div>
      <div className={styles.tripMenusDiv}>
        <button className={styles.hotelButton}>
          <img
            className={styles.groupIcon}
            alt=""
            src="group-21.svg"
            onClick={onGroup1Click}
          />
          <div className={styles.hotelDiv}>Hotel</div>
        </button>
        <button className={styles.hotelButton}>
          <div className={styles.groupIcon} onClick={onGroupContainerClick}>
            <div className={styles.rectangleDiv} />
            <img className={styles.groupIcon1} alt="" src="group.svg" />
          </div>
          <div className={styles.attractionsDiv}>Attractions</div>
        </button>
        <button className={styles.hotelButton}>
          <img className={styles.groupIcon2} alt="" src="group-211.svg" />
          <div className={styles.attractionsDiv}>Eats</div>
        </button>
        <button className={styles.hotelButton}>
          <div className={styles.groupIcon2}>
            <div className={styles.rectangleDiv1} />
            <img className={styles.vectorIcon} alt="" src="vector.svg" />
          </div>
          <div className={styles.attractionsDiv}>Commute</div>
        </button>
        <button className={styles.hotelButton}>
          <div className={styles.groupDiv2}>
            <div className={styles.rectangleDiv2} />
            <img className={styles.vectorIcon1} alt="" src="vector1.svg" />
          </div>
          <div className={styles.taxiDiv}>Taxi</div>
        </button>
        <button className={styles.hotelButton}>
          <div className={styles.groupIcon2}>
            <div className={styles.rectangleDiv3} />
            <img className={styles.vectorIcon2} alt="" src="vector2.svg" />
          </div>
          <div className={styles.attractionsDiv}>Movies</div>
        </button>
      </div>
    </div>
  );
};
