import css from "./FriendListItem.module.css";
import clsx from "clsx";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      <p
        className={clsx(css.text, {
          [css.textOnline]: isOnline,
          [css.textOffline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
export default FriendListItem;
