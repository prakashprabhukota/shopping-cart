import { Container, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container style={{ marginTop: "30vmin" }}>
        <h1 className="display-4">Welcome to the store</h1>
        <Stack>
          <div className="blockquote">
            <p>Choose from a variety of products</p>
          </div>
          <p className="blockquote-footer">
            Grab 'em before the offer ends
          </p>
        </Stack>
        <div>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => navigate("store")}
          >
            Go to Store
          </button>
        </div>
      </Container>
    </>
  );
};
