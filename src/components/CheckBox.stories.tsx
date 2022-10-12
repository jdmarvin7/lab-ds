

import { CheckBox, CheckBoxProps } from './CheckBox';
import { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text';

export default {
    title: 'Components/CheckBox',
    component: CheckBox,
    args: {
    },
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    { Story() }
                    <Text size="sm">Lembrar me</Text>
                </div>
            )
        }
    ]
} as Meta<CheckBoxProps>

export const Default: StoryObj<CheckBoxProps> = { }