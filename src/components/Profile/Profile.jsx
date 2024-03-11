/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import css from "./Profile.module.css";
export default function Profile({ image, name, tag, location, stats }) {
  return (
    <div className={css.profileContainer}>
      <div className={css.profileInfo}>
        <img src={image} alt="User avatar" />
        <p className="css.pr">{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

// Опис типів пропсів компонента
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};
