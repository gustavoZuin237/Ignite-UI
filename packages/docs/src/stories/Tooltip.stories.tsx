import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from '@ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
} as Meta

export const Primary: StoryObj = {
  args: { text: '' },
}
