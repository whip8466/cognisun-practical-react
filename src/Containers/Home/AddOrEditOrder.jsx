import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { addOrders, editOrder } from "../../Store/Actions/orders";
import "./home.css";

export const AddOrEditOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [order, setOrder] = useState({});
  const selectedOrder = useSelector((state) => state.orders.selectedOrder);
  const isEdit = useSelector((state) => state.orders.isEdit);

  useEffect(() => {
    setOrder(selectedOrder);
  }, [selectedOrder]);

  const orderChangeHandler = (event) => {
    const { value, name } = event.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const orderSubmitHandler = () => {
    if(isEdit) {
      dispatch(editOrder(order))
    } else {
      dispatch(addOrders(order))
    }
    navigate("/");
  }

  return (
    <div style={{ margin: "100px 550px" }}>
      <Row>
        <Col>
          <h1>Add Order</h1>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="text-right">
          SKU :
        </Col>
        <Col md={6} className="text-left">
          <input name="sku" value={order.sku} onChange={orderChangeHandler} />
        </Col>
      </Row>

      <Row>
        <Col md={6} className="text-right">
          Product Name :
        </Col>
        <Col md={6} className="text-left">
          <input
            name="productName"
            value={order.productName}
            onChange={orderChangeHandler}
          />
        </Col>
      </Row>

      <Row>
        <Col md={6} className="text-right">
          Product Category :
        </Col>
        <Col md={6} className="text-left">
          <input
            name="productCategory"
            value={order.productCategory}
            onChange={orderChangeHandler}
          />
        </Col>
      </Row>

      <Row>
        <Col md={6} className="text-right">
          QTY :
        </Col>
        <Col md={6} className="text-left">
          <input name="qty" value={order.qty} onChange={orderChangeHandler} />
        </Col>
      </Row>

      <Row>
        <Col md={6} className="text-right">
          Shipping Type :
        </Col>
        <Col md={6} className="text-left">
          <input
            name="shippingType"
            value={order.shippingType}
            onChange={orderChangeHandler}
          />
        </Col>
      </Row>

      <Row>
        <Col md={6} className="text-right">
          Total Amount :
        </Col>
        <Col md={6} className="text-left">
          <input
            name="totalAmount"
            value={order.totalAmount}
            onChange={orderChangeHandler}
          />
        </Col>
      </Row>

      <Row>
        <Col md={6} className="text-right">
          Customer Name :
        </Col>
        <Col md={6} className="text-left">
          <input
            name="customerName"
            value={order.customerName}
            onChange={orderChangeHandler}
          />
        </Col>
      </Row>

      <Row>
        <Col md={6} className="text-right">
          DOB :
        </Col>
        <Col md={6} className="text-left">
          <input name="dob" value={order.dob} onChange={orderChangeHandler} />
        </Col>
      </Row>

      <Row>
        <Col md={6} className="text-right">
          phone :
        </Col>
        <Col md={6} className="text-left">
          <input
            name="phone"
            value={order.phone}
            onChange={orderChangeHandler}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <button
          className="btn btn-primary"
          onClick={orderSubmitHandler}
          >
            Submit
            </button>
        </Col>
      </Row>
    </div>
  );
};
