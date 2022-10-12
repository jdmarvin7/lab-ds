import { Text, TextProps } from './Text';
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum',
        size: 'sm'
    },
    // argTypes: {
    //     size: {
    //         options: ['sm', 'md', 'lg']
    //     }
    // }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = { }

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'md'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Text with p tag</p>
        )
    }
}