import { styled } from '../../styles'

export const TooltipWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '200px',
})

export const TooltipContainer = styled('div', {
  width: '100%',
  height: '$10',
  paddingInline: '$4',
  backgroundColor: '$gray900',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$sm',
})

export const TooltipEdge = styled('span', {
  width: '100%',
  height: '16px',
  display: 'flex',
  justifyContent: 'center',
  background: 'transparent',
  color: '$gray900',
  transform: 'translateY(-6px)',
})
