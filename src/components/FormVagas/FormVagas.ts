import styled from 'styled-components'
import { ButtonHTMLAttributes, FormHTMLAttributes } from 'react'

interface CampoInputProps {
  placeholder?: string
  type?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type FormProps = FormHTMLAttributes<HTMLFormElement>
type PesquisarButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Form = styled.form<FormProps>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const PesquisarButton = styled.button<PesquisarButtonProps>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`

export const CampoInput = styled.input<CampoInputProps>`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`
