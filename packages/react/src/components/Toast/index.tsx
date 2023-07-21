import { X } from 'phosphor-react'
import { Heading } from '../Heading'
import { Text } from '../Text'
import * as s from './styles'

interface ToastProps {
  heading: string
  text: string
  onClick: () => void
}

export function Toast({ heading, text, onClick }: ToastProps) {
  return (
    <s.ToastContainer>
      <s.ToastHeader>
        <Heading size={'sm'}>{heading}</Heading>
        <X size={20} onClick={onClick} />
      </s.ToastHeader>

      <span>
        <Text size={'sm'}>{text}</Text>
      </span>
    </s.ToastContainer>
  )
}

Toast.displayName = 'Toast'
