import { Input, InputComponentProps } from './Input';

import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: Input,
  args: {},
} as Meta<InputComponentProps>;

export const Default: StoryObj<InputComponentProps> = {
  argTypes: {
    onChangeMultiline: {
      control: false,
    },
  },
};
export const Error: StoryObj<InputComponentProps> = {
  args: {
    error: true,
  },
  argTypes: {
    onChangeMultiline: {
      control: false,
    },
  },
};
export const Disabled: StoryObj<InputComponentProps> = {
  args: {
    disabled: true,
  },
  argTypes: {
    onChangeMultiline: {
      control: false,
    },
  },
};
export const HelperText: StoryObj<InputComponentProps> = {
  args: {
    helperText: 'something interesting',
  },
  argTypes: {
    onChangeMultiline: {
      control: false,
    },
  },
};
export const Small: StoryObj<InputComponentProps> = {
  args: {
    padding: 'sm',
  },
  argTypes: {
    onChangeMultiline: {
      control: false,
    },
  },
};
export const Multiline: StoryObj<InputComponentProps> = {
  args: {
    multiline: true,
    rows: 4,
  },
  argTypes: {
    onChangeMultiline: {
      control: false,
    },
  },
};
