import React from "react";

const styles = {
  newsBox: {
    border: "1px solid lightgray",
    margin: "0.5rem 0",
    height: "50px",
    width: "300px",
    borderBottom: "1px solid #333",
  },
};

const News = () => {
  const [error, setError] = React.useState(false);

  const handleClick = () => {
    setError(true);
  };

  if (error) throw new Error("News error!");

  return (
    <>
      <h2>News</h2>
      <div style={styles.newsBox} />
      <div style={styles.newsBox} />
      <div style={styles.newsBox} />
      <button onClick={handleClick}>Throw Error</button>
    </>
  );
};

export default News;