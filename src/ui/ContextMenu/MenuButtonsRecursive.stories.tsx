import type { Meta, StoryObj } from '@storybook/react-vite';

import { MenuButtonsRecersive } from './MenuButtonsRecursive';

const meta = {
  title:"Core/Recursive",
  component: MenuButtonsRecersive,
  tags:['autodocs'],
  decorators:[
    (Story)=>(
      <div style={{
        height:'25px', 
        width:'25px',  
        margin:'5px',
        }}>
        <Story/>
      </div>
    )
  ]
} satisfies Meta<typeof MenuButtonsRecersive>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    menuItem:[
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
    onButtonClick:{current:null}
  },
  
};