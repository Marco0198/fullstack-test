import { Fragment } from "react";
import "./style.css";

const GetHeadline = ({ articles }) => {
  return (
    <Fragment>
      {articles.map((item) => (
        <div className="box-container">
          <div className="container">
            <img
              src={`${item.urlToImage}`}
              style={{ width: 700, height: 400 }}
              alt=" "
            />

            <h3 style={{ fontFamily: "courier" }}>{item.title}</h3>
            <h2>{item.author}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default GetHeadline;
