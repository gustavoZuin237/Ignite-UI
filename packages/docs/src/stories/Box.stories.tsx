import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@ignite-ui/react'

export default {
  title: 'Form/Box',
  component: Box,

  args: {
    children: (
      <>
        <p>Testando o box</p>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof Box>

export const Primary: StoryObj = {}
