import type { Meta, StoryObj } from '@storybook/react-vite';

import {ScrollDiv} from './ScrollDiv';

const meta = {
  title:"Core/ScrollDiv",
  parameters:{
    layout:"fullscreen",
  },
  tags:['autodocs'],
  argTypes:{
    children:{
      control:false
    }
  },
  component: ScrollDiv,
} satisfies Meta<typeof ScrollDiv>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    children:<p>Some thing</p>
  }
};