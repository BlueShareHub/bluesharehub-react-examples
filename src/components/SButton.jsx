// src/components/SButton.jsx
import styled from 'styled-components';

export const SButton = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 600;
  border: 1px solid #d0d7de;
  background: #f6f8fa;
  cursor: pointer;

  ${(p) => p.$primary && `
    color: #fff;
    background: #0969da;
    border-color: #0969da;
  `}

  &:disabled { opacity: .6; cursor: not-allowed; }
`;
