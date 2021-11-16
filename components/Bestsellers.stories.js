
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Bestsellers } from './Bestsellers';
import shoe1 from './images/shoe1.png'
import shoe2 from './images/shoe2.png'
import shoe3 from './images/shoe3.png'

export default {
  title: 'Component/Bestsellers',
  component: Bestsellers,
  decorators: [withDesign],
  argTypes: {},

  parameters: {
    design: {
      type: 'image',
      url: 'https://res.cloudinary.com/elie-tech/image/upload/v1604444026/frontwork-prod/40:2.png',
    },
  },

};

const Story = (args) => <Bestsellers {...args} />;

export const Basic = Story.bind({});
Basic.args = {
  primary: true,
  label: 'Bestsellers',
};
