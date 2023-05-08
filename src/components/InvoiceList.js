import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import InvoiceForm from "./InvoiceForm";

function InvoicesList({ setShowCreateInvoice }) {
  const invoices = useSelector((state) => state.invoice.invoices);
  const [showEditInvoice, setShowEditInvoice] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  console.log(invoices);

  const handleCreateClick = () => {
    setShowCreateInvoice(true);
  };

  const handleEditClick = (invoice) => {
    setSelectedInvoice(invoice);
    setShowEditInvoice(true);
  };

  return (
    <div>
      {showEditInvoice ? (
        <InvoiceForm
          invoice={selectedInvoice}
          onHide={() => setShowEditInvoice(false)}
        />
      ) : (
        <>
          <Button onClick={handleCreateClick}>Create Invoice</Button>
          <h2>Invoices</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Client</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr key={invoice.id}>
                  <td>{invoice.invoiceNumber}</td>
                  <td>{invoice.billTo}</td>
                  <td>{invoice.dateOfIssue}</td>
                  <td>{invoice.items.length}</td>
                  <td>{invoice.total}</td>
                  <td>
                    <Button variant="primary" className="button-container">
                      View
                    </Button>
                    <Button
                      variant="warning"
                      className="button-container"
                      onClick={() => handleEditClick(invoice)}
                    >
                      Edit
                    </Button>
                    <Button variant="danger" className="button-container">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
}

export default InvoicesList;
