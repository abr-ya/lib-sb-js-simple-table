import { SimpleTable } from '../component/index';

export default {
  title: 'SimpleTable - A Customizable React Table Component',
  component: SimpleTable,
  argTypes: {
    rows: { control: '' },
    headers: { control: '' }
  },
};

const Template = args => <SimpleTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: [
    ['This', 'is', 'just', 'a', 'test'],
    ['This', 'is', 'also', 'a', 'test'],
    ['Just', 'a', 'little', 'more', 'data'],
    ['Row', 'number', 'four', 'right', 'here'],
  ],
  headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
};
