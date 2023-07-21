import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from '@ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
} as Meta

export const Primary: StoryObj = {
  args: {
    heading: 'Agendamento realizado',
    text: 'Quarta-feira, 23 de Outubro às 16h',
  },
}
