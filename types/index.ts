import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles?: String;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}