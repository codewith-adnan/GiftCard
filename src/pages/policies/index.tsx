import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  Title,
  PolicyCard,
  PolicyText,
  PolicyName,
  ActionButtons,
  ActionButton,
} from './styles';
import { FaEye, FaPencilAlt } from 'react-icons/fa';

const policies = [
  { id: 1, name: 'Terms & Condition' },
  { id: 2, name: 'Privacy Policy' },
];

const MyPolicies: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>My Policies</Title>
      {policies.map((policy) => (
        <PolicyCard key={policy.id}>
          <div>
            <PolicyText>Policy Name</PolicyText>
            <PolicyName>{policy.name}</PolicyName>
          </div>
          <ActionButtons>
            <ActionButton onClick={() => navigate('/pages/createPolicy')} className="view">
              <FaEye size={14} />
            </ActionButton>
            <ActionButton   onClick={() => navigate('/pages/editePolicy')}  className="edit" >
              <FaPencilAlt size={14} />
            </ActionButton>
          </ActionButtons>
        </PolicyCard>
      ))}
    </Wrapper>
  );
};

export default MyPolicies;
