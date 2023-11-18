import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { addInvoice, deleteInvoice } from "../features/invoice/invoiceSlice";
import InvoiceForm from "./InvoiceForm";
import InvoiceModal from "./InvoiceModal";

function InvoicesList() {
  const invoices = useSelector((state) => state.invoice.invoices);
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);
  const [showEditInvoice, setShowEditInvoice] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const dispatch = useDispatch();

  const handleCreateClick = () => {
    setShowCreateInvoice(true);
  };

  const handleEditClick = (invoice) => {
    setSelectedInvoice(invoice);
    setShowEditInvoice(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = (invoice) => {
    setSelectedInvoice(invoice);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = (invoiceId) => {
    dispatch(deleteInvoice(invoiceId));
  };

  const handleClone = (invoice) => {
    dispatch(addInvoice({ ...invoice, id: maxId + 1 }));
  };

  let maxId;
  if (invoices?.length) {
    maxId = invoices.reduce(
      (max, invoice) => (invoice.id > max ? invoice.id : max),
      invoices[0].id
    );
  } else {
    maxId = 0;
  }

  return (
    <div>
      {showCreateInvoice || showEditInvoice ? (
        <InvoiceForm
          invoice={selectedInvoice}
          onHide={() => {
            setShowCreateInvoice(false);
            setShowEditInvoice(false);
            setSelectedInvoice(null);
          }}
          id={showEditInvoice ? selectedInvoice.id : maxId + 1}
        />
      ) : (
        <>
          <h2 className="py-2">Invoices</h2>
          <Button onClick={handleCreateClick} className="mb-2">
            Create Invoice
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr key={invoice.id} style={{ fontSize: "1.125rem" }}>
                  <td>{invoice.id}</td>
                  <td>{invoice.billTo}</td>
                  <td>{invoice.billToEmail}</td>
                  <td>{invoice.dateOfIssue}</td>
                  <td>{invoice.items.length}</td>
                  <td>{invoice.total}</td>
                  <td>
                    <Button
                      variant="primary"
                      className="button-container"
                      onClick={() => openModal(invoice)}
                    >
                      View
                    </Button>
                    <Button
                      variant="warning"
                      className="button-container"
                      onClick={() => handleEditClick(invoice)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="button-container"
                      onClick={() => handleDelete(invoice.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="info"
                      className="button-container"
                      onClick={() => handleClone(invoice)}
                    >
                      Clone
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {isOpen && (
            <InvoiceModal
              showModal={isOpen}
              closeModal={closeModal}
              info={selectedInvoice}
              items={selectedInvoice.items}
              currency={selectedInvoice.currency}
              subTotal={selectedInvoice.subTotal}
              taxAmmount={selectedInvoice.taxAmmount}
              discountAmmount={selectedInvoice.discountAmmount}
              total={selectedInvoice.total}
            />
          )}
        </>
      )}
    </div>
  );
}

export default InvoicesList;
