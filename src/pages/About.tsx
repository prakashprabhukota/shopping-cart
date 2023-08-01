import { Container, Stack } from "react-bootstrap";

export const About = () => {
  return (
    <>
      <Container style={{ marginTop: "10vmax" }}>
        <div className="display-6">
          <p>This app is built on React TypeScript and Bootstrap.</p>
        </div>
        <Stack className="lead fs-5">
          <p>
            Context is used for state management of the applicaiton. Items are
            fetched from local JSON data. Items added to the cart are stored in
            local storage to retain the data if page gets refreshed.
          </p>
          <p>
            The store page will also allow you to add/remove items from the
            cart. The cart calculates the total price and allows items to be
            removed. Overall this was a really fun project and great learning
            experience.
          </p>
        </Stack>
      </Container>
    </>
  );
};
