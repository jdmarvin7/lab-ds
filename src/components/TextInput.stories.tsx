import { TextInput, TextInputRootProps } from './TextInput';
import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        chidren: (
            <>
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>
            <TextInput.Input placeholder='Caralhooo'/>
            </>
        )
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = { }

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        chidren: (
            <TextInput.Input />
        )
    }
}