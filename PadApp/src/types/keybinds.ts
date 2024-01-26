export enum Modifier {
    None = "None",
    LeftCtrl = "LeftControl",
    RightCtrl = "RightControl",
    LeftShift = "LeftShift",
    RightShift = "RightShift",
    LeftAlt = "LeftAlt",
    RightAlt = "RightAlt"
}

export interface KeyBind {
    uid: string;
    name: string;
    keybind: string | null;
    modifiers: [Modifier, Modifier] | [Modifier] | [];
    doubletap: boolean;
    hold: boolean;
    repeat: number | "infinite";
    delayRepeat: number;

}

export interface KeyBindList {
    uid: string;
    name: string;
    keybinds: KeyBind[];
}
