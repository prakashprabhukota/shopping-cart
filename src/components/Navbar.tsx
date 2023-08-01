import { Navbar as NavbarBs, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { useShoppingCart } from "../context/ShoppingCartContext";
export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
        {/* Cart Button */}
        {cartQuantity > 0 && (
          <Button
            style={{ width: "2.5rem", height: "rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
            onClick={openCart}
          >
            <CgShoppingCart />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.2rem",
                height: "1.2rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};
