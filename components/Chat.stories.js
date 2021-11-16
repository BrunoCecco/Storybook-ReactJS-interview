
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Chat } from './Chat';

export default {
  title: 'Component/Chat',
  component: Chat,
  decorators: [withDesign],
  argTypes: {},

  parameters: {
    design: {
      type: 'image',
      url: 'https://res.cloudinary.com/elie-tech/image/upload/v1604444026/frontwork-prod/7:10.png',
    },
  },

};

const Story = (args) => <Chat {...args} />;

export const Basic = Story.bind({});
Basic.args = {
  primary: true,
  label: 'Chat',
  // name:"Emily Dougrer",
  // job:"Developer",
  // content:"Hi there. We use Boards to share initial goals and ideas."  
};
