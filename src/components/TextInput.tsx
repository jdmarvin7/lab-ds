import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface TextInputRootProps {
    chidren: ReactNode
}

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return(
        <Slot className="w-6 h-6 text-gray-400">
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInputIcon'

function TextInputRoot({ chidren }: TextInputRootProps) {
    return (
        <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300">
            {chidren}
        </div>
    )
}

function TextInputInput(props: TextInputProps) {
    return (
        <input className="bg-transparent flex-1 text-gray-100 text-xs  outline-none placeholder:text-gray-400 w-full" placeholder="Insira o seu nome" {...props} />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}