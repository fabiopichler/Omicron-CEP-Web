import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import AddressSearchTransition from '../../views/addressView/addressSearchForm/addressSearchTransition/AddressSearchTransition';

import { IQuestionDialogProps } from './IQuestionDialogProps';

const QuestionDialog: React.FC<IQuestionDialogProps> = props => {
    const {
        title,
        description,
        openButton: OpenButton,
        onCancel,
        onConfirm
    } = props;

    const [open, setOpen] = React.useState(false);

    const handleConfirm = (): void => {
        setOpen(false);

        if (onConfirm)
            onConfirm();
    }

    const handleClose = (): void => {
        setOpen(false);

        if (onCancel)
            onCancel();
    }

    return (
        <>
            <OpenButton
                onClick={() => setOpen(true)}
            />

            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={AddressSearchTransition}
            >
                <DialogTitle>{title}</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        {description}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Não
                    </Button>

                    <Button onClick={handleConfirm} color="primary" autoFocus>
                        Sim
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default QuestionDialog;
