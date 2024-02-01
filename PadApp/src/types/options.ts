export interface General {
    startWithWindows: boolean
    startMinimized: boolean
    minimizeInNotif: boolean
    serverwhenstart: boolean
    blockToFile: string | null
}
export interface Server {
    port: number
    ipwhitelist: string[] | []
    maxConnections: number
}
export interface Options {
    general: General
    server: Server
}
