import { Text } from '../Text'
import * as s from './styles'

import { CaretDown } from 'phosphor-react'

interface TooltipProps {
  text: string
}

export function Tooltip({ text }: TooltipProps) {
  return (
    <s.TooltipWrapper>
      <s.TooltipContainer>
        <Text size={'sm'}>{text}</Text>
      </s.TooltipContainer>
      <s.TooltipEdge>
        <CaretDown size={16} weight="fill" />
      </s.TooltipEdge>
    </s.TooltipWrapper>
  )
}

Tooltip.displayName = 'Tooltip'
