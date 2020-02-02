import styled from "styled-components";

export const Form = styled.form`
  margin-top: 30px;
`;

export const InputBlock = styled.div`
  &:first-of-type {
    margin-top: 0;
  }
  margin-top: 20px;
`;

export const InputGroup = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  ${InputBlock} {
    margin-top: 0;
  }
`;

export const Label = styled.label`
  color: #acacac;
  font-size: 14px;
  font-weight: bold;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: 1px solid #eee;
`;

export const SubmitButton = styled.button`
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #7d40e7;
  border-radius: 2px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: background 0.5s;
  &:hover {
    background: #6931ca;
  }
`;
