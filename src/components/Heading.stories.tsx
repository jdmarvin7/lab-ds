import { Heading, HeadingProps } from './Heading';
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum',
        size: 'sm'
    },
    // argTypes: {
    //     size: {
    //         options: ['sm', 'md', 'lg']
    //     }
    // }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = { }

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'md'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with H1</h1>
        )
    },
    argTypes: {
        children: {
            disable: true
        }
    }
}