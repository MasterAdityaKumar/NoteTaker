import "./DesktopNotesContent.css";
// eslint-disable-next-line
function DesktopNotesContent({ note }) {
  return (
    <div className="desktop__notes__content__note">
      <div className="desktop__notes__content__details">
        {/* eslint-disable-next-line  */}
        <p>{note.content}</p>
      </div>
      <div className="desktop__notes__content__date__time__details">
        {/* eslint-disable-next-line  */}
        <div className="desktop__notes__content__date">{note.date}</div>
        {/* eslint-disable-next-line  */}
        <div className="desktop__notes__content__time">{note.time}</div>
      </div>
    </div>
  );
}

export default DesktopNotesContent;
