
export interface IQuestionDialogProps {
    title: string;
    description: string;
    openButton: any;
    onCancel?: () => void;
    onConfirm?: () => void;
}
