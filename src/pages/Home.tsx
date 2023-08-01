import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="display-4">Welcome to our store</h1>
      <figure>
        <blockquote className="blockquote">
          <p>Choose from a variety of products</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Grab 'em before the offer ends
        </figcaption>
      </figure>
      <div>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => navigate("store")}
        >
          Go to Store
        </button>
      </div>
    </>
  );
};
