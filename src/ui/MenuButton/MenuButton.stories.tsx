import type { Meta, StoryObj } from '@storybook/react-vite';

import { MenuButton } from './MenuButton';

const meta = {
  title:"Core/MenuButton",
  component: MenuButton,
  tags:['autodocs'],
} satisfies Meta<typeof MenuButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "icon": "icon",
    "isCurrent": true
  },
};

export const RealIcon: Story = {
  args: {
    "icon": '/about-icon.svg',
    "isCurrent": true,
    "children":<p>Button with Icon</p>
  },
};