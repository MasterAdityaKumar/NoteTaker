// src/components/CreateGroup.jsx
const CreateGroup = () => {
    return (
      <div>
        <h2>Create Group</h2>
      </div>
    );
  };
  export default CreateGroup;
  
  // src/components/MainPage.jsx
  import "./MainPage.css";
  import NotesList from "./NotesList";
  import CreateGroup from "./CreateGroup";
  import { useState } from "react";
  
  const MainPage = () => {
    const [createGroup, setCreateGroup] = useState(false);
  
    return (
      <div>
        <NotesList />
        <button onClick={() => setCreateGroup(true)}>Create Group</button>
        {createGroup && <CreateGroup />}
      </div>
    );
  };
  
  export default MainPage;
  
  // src/components/NotesList.jsx
  const NotesList = () => {
    return (
      <div>
        <h2>Notes List</h2>
      </div>
    );
  };
  export default NotesList;
  