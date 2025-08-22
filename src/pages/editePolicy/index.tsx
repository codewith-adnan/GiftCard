import React, { useState } from 'react';
import {
  Container,
  Title,
  Card,
  Label,
  PolicyName,
  List,
  ListItem,
  ItemTitle,
  ActionGroup,
  ActionButton,
} from './styles';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import DeleteCategory from '../../models/deleteCategory';
import { useNavigate } from 'react-router-dom';

const EditePolicy: React.FC = () => {
  const navigate = useNavigate();
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleDelete = () => {
    setShowDeletePopup(true);
  };

  const closePopup = () => {
    setShowDeletePopup(false);
  };

  return (
    <Container>
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title>Create Policies</Title>
          <ActionGroup>
            <ActionButton onClick={() => navigate('/pages/createPolicy')} className="edit" aria-label="Edit">
              <FaPencilAlt size={14} className="icon" />
            </ActionButton>
            <ActionButton onClick={handleDelete} className="delete" aria-label="Delete">
              <FaTrashAlt size={14} className="icon" />
            </ActionButton>
          </ActionGroup>
        </div>

        <Card>
          <article>
            <Label htmlFor="policy-name">Policy Name</Label>
            <PolicyName id="policy-name">Terms &amp; Condition</PolicyName>
          </article>

          <article>
            <Label htmlFor="policy-description">Policy Description</Label>
            <List id="policy-description">
              <ListItem>
                <ItemTitle>Cancellation Period:</ItemTitle> Customers can cancel their order within [insert number] hours of placing the order without incurring any cancellation fees.
              </ListItem>
              <ListItem>
                <ItemTitle>Cancellation Fees:</ItemTitle> After the cancellation period has elapsed, a cancellation fee of [insert percentage]% of the total order value may apply.
              </ListItem>
              <ListItem>
                <ItemTitle>Cancellation Procedure:</ItemTitle> To cancel an order, customers must contact our customer service team via [insert contact details] and provide their order number for reference.
              </ListItem>
              <ListItem>
                <ItemTitle>Refund Process:</ItemTitle> Upon cancellation within the allowed period, a full refund will be issued to the original payment method within [insert number] business days...
              </ListItem>
              <ListItem>
                <ItemTitle>Exceptions:</ItemTitle> Certain products may be exempt from cancellation or subject to different cancellation terms...
              </ListItem>
              <ListItem>
                <ItemTitle>Refund Eligibility:</ItemTitle> Refunds will only be issued for cancellations made in accordance with this policy...
              </ListItem>
              <ListItem>
                <ItemTitle>Cancellation of Customized Orders:</ItemTitle> Orders for customized or made-to-order products may not be eligible...
              </ListItem>
              <ListItem>
                <ItemTitle>Policy Updates:</ItemTitle> This cancellation policy is subject to change without prior notice...
              </ListItem>
            </List>
          </article>
        </Card>

        <DeleteCategory isOpen={showDeletePopup}onClose={closePopup} onDelete={() => { closePopup(); }}/>
      </section>
    </Container>
  );
};

export default EditePolicy;
