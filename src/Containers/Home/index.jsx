import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Col, Row, Table } from "reactstrap";
import { deleteOrder, setSelectedOrder } from "../../Store/Actions/orders";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState()
  const orderdata = useSelector((state) => state.orders.orderList);

  useEffect(() => {
      setOrderList(orderdata);
  }, [orderdata])

  const editOrderClickHandler = (order) => {
    dispatch(setSelectedOrder(order));
    navigate("/add-edit-order");
  };

  const deleteOrderClickHandler = (order) => {
      if(window.confirm('Are you sure')) {
          dispatch(deleteOrder(order?.orderId));
      }
  }

  return (
    <div style={{ margin: "100px 50px" }}>
      <Row>
        <Col className="text-right">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/add-edit-order")}
          >
            Add Order
          </button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table>
            <thead>
              <td>Order Id</td>
              <td>SKU - Product Name (Product Category)</td>
              <td>Qty</td>
              <td>Shipping Type</td>
              <td>Total Amount</td>
              <td>Customer Name</td>
              <td>DOB</td>
              <td>Phone</td>
              <td>Action</td>
            </thead>
            <tbody>
              {orderList?.length > 0 ? (
                orderList.map((order) => (
                  <tr>
                    <td>{order.orderId}</td>
                    <td>{order.sku}</td>
                    <td>{order.qty}</td>
                    <td>{order.shippingType}</td>
                    <td>{order.totalAmount}</td>
                    <td>{order.customerName}</td>
                    <td>{order.dob}</td>
                    <td>{order.phone}</td>
                    <td>
                      <button
                        className="btn btn-info mr-5"
                        onClick={() => editOrderClickHandler(order)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteOrderClickHandler(order)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9}> No Order Found</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};
