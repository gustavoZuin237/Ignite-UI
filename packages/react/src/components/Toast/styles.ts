import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  padding: '$3 $5',
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  color: '$gray200',
})

export const ToastHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  h2: {
    color: '$white',
  },
})
