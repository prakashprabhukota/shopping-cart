export const About = () => {
  return (
    <>
      <p className="fs-5">
        This project is built on React TypeScript and Bootstrap. Context is used
        for state management of the applicaiton. Items are fetched from local
        JSON data. Items added to the cart are stored in local storage to retain
        the data if page gets refreshed. The store page will also allow you to
        add/remove items from the cart. The cart calculates the total price and
        allows items to be removed. Overall this was a really fun project and
        great learning experience.
      </p>
    </>
  );
};
