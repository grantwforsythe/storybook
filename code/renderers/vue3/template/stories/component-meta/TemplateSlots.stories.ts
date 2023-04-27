import type { StoryObj, Meta } from '@storybook/vue3';

import Component from './template-slots/component.vue';

const meta = {
  component: Component,
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;
type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
