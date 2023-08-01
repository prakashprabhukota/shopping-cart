import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";

export const Store = () => {
  return (
    <>
      <Row md={2} sm={1} lg={3} className="g-3" style={{paddingBottom: '2.5rem'}}>
        {storeItems.map((item) => (
          // {JSON.stringify(item)}
          <Col>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
