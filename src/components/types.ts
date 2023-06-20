export interface modeProps{
    mode: string
}
export interface NavBarProps extends modeProps{
    toggleMode: () => void
}
export interface TextFormProps extends modeProps{
    heading: string
    showAlert: (content: string, type: string) => void
}
export interface AlertProps {
    alert: {
        type: string|null
        content: string|null
    }
}