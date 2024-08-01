
import "./NotesTitle.css";
import usePocketContext from "../../hooks/usePocketContext";

// eslint-disable-next-line
function NotesTitle({ title }) {
  const { selected, setSelected } = usePocketContext();// eslint-disable-next-line
  const nameInitals = title[0].name // eslint-disable-next-line
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();// eslint-disable-next-line
  // eslint-disable-next-line
  const newTitle = title[0].name// eslint-disable-next-line
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const handleTitleClick = () => {// eslint-disable-next-line
    setSelected(title[0].name);// eslint-disable-next-line
  };

  return (
    
    <div
      onClick={handleTitleClick}
      className={`group__title__logo ${// eslint-disable-next-line
        selected === title[0].name ? "highlighted__title" : null
      }`}
    >
      {/* eslint-disable-next-line  */}
      <div className="title__logo" style={{ backgroundColor: title[0].color }}>
        {nameInitals}
      </div>
      <div className="group__title">{newTitle}</div>
    </div>
  );
}

export default NotesTitle;