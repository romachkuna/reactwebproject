import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  padding: 2rem;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  .icon {
    color: black;
    background-color: white;
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}