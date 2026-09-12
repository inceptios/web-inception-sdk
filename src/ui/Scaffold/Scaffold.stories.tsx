import type { Meta, StoryObj } from '@storybook/react-vite';

import {Scaffold} from './Scaffold';

const meta = {
  title: "Core/Scaffold",
  component: Scaffold,
  parameters: {
    layout:"fullscreen",
  },
  tags: ['autodocs'],
  argTypes: {
    leftSideBar: {
      control: false,
    },
    children: {
      control: false,
    }
  },
  decorators:[
    (Story)=>(
      <div style={{
        height:'90vh', 
        width:'90vw',  
        margin:'5px',
        }}>
        <Story/>
      </div>
    )
  ]
} satisfies Meta<typeof Scaffold>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "leftSideBar": <p>sideBar</p>,
    "children": <p>Main Div</p>,
    "rightSideBar":<p>rightSide bar</p>
  },
};

export const Onlychildren: Story = {
  args:{
    "children":<p>Main Div</p>
  }
}

export const BigLoremMain: Story = {
  args: {
    "leftSideBar": <p>sideBar</p>,
    "children": <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      
      </p>,
    "rightSideBar":<p>rightSide bar</p>
  },
};

export const BigLoremLeft: Story = {
  args: {
    "children": <p>sideBar</p>,
    "leftSideBar": <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      
      </p>,
    "rightSideBar":<p>rightSide bar</p>
  },
};

export const BigLoremRight: Story = {
  args: {
    "children": <p>sideBar</p>,
    "rightSideBar": <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis, 
      sit repellendus quaerat eveniet tempora sunt quos veritatis dignissimos omnis 
      placeat libero sed fuga exercitationem optio error velit quia voluptatum?
      
      </p>,
    "leftSideBar":<p>rightSide bar</p>
  },
};