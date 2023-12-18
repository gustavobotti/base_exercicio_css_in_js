import styled from 'styled-components'

// interface InputFieldProps {
//   // Define the props you want to pass to the input element
//   type?: string
//   placeholder?: string
// }

export const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }

  div {
    position: relative;
    color: #eee;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const Title = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

// export const InputField = styled.input<InputFieldProps>`
//   width: 100%;
//   padding: 10px;
//   margin-top: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   box-sizing: border-box;
// `
