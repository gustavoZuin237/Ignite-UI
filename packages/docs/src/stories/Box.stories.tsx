import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@ignite-ui/react'

export default {
  title: 'Containers/Box',
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
      table: { disable: true },
    },
  },
} as Meta<typeof Box>

export const Primary: StoryObj = {}
