import type { Meta, StoryObj } from '@storybook/react-vite';

import {ContextMenu} from './ContextMenu';

const meta = {
  title: "Core/ContextMenu",

  component: ContextMenu,
  tags: ['autodocs'],
  argTypes:{
    isContextMenuShown:{
      control:'boolean'
    },
    menuCoordinates:{
      control:'object'
    },
    contextRef:{
      control:false
    },
    functionRef:{
      control:false,
    },
    menuItems:{
      control:'text'
    }
  }
} satisfies Meta<typeof ContextMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    isContextMenuShown:true,
    menuCoordinates:{x:0,y:0},
    menuItems:[
      {
        menuId:"open",
        title:"Open",
        enabled:true,
        items:[
          {
            menuId:"open",
            title: "Open",
            enabled:true
          }
        ]
      }
    ],
    contextRef:{current:null},
    functionRef: { current :null }
  },
};