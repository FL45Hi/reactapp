import React from "react";

const Chat = () => {
  const styles = {
    chatBox: {
      border: "1px solid #333",
      margin: "0.5rem 0",
      height: "150px",
      width: "300px",
    },
  };

  const [error, setError] = React.useState(false);

  const handleClick = () => {
    setError(true);
  };

  if (error) throw new Error("News error!");

  return (
    <>
      <h2>Chat</h2>
      <div style={styles.chatBox} />
      <button onClick={handleClick}>Throw Error</button>
    </>
  );
};

export default Chat;