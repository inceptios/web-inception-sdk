import type { Meta, StoryObj } from '@storybook/react-vite';

import { DialogBox} from './Dialog';
import './Dialog.css'

const meta = {
  title:"Core/Dialog",
  tags:['autodocs'],
  component: DialogBox,
} satisfies Meta<typeof DialogBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "dialogTitle":  <h3>Header</h3>
    ,
    "children": <p>body</p>,
    "confirmButton": <button>Confirm </button>,
    "dismissButton": <button>Cancel</button>,
    "onDismiss": ()=>{}
  },
};