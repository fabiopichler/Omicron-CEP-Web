import React from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';
import {
    Theme,
    Fab,
    Dialog,
    DialogTitle,
    Container,
    TextField,
    DialogContent,
    Button,
    DialogActions
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import AddressSearchTransition from './addressSearchTransition/AddressSearchTransition';

import { IAddressSearchFormProps } from './IAddressSearchFormProps';
import { UfList } from '../../../../data/UfList';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'fixed',
            width: '100%',
            bottom: 0,
            zIndex: 100,
        },
        container: {
            position: 'relative',
            padding: 0,
        },
        fab: {
            position: 'absolute',
            bottom: theme.spacing(2.5),
            right: theme.spacing(2.5),
        },
        dialogContainer: {
            alignItems: 'start',
        },
        dialogPaper: {
            [theme.breakpoints.down('xs')]: {
                margin: 0,
                borderRadius: 0,
            },
        },
    })
);

const AddressSearchForm: React.FC<IAddressSearchFormProps> = props => {
    const { onCheckByAddress } = props;
    const classes = useStyles(props);

    const [open, setOpen] = React.useState(false);
    const [uf, setUf] = React.useState('');
    const [cidade, setCidade] = React.useState('');
    const [logradouro, setLogradouro] = React.useState('');

    const [ufError, setUfError] = React.useState(false);
    const [cidadeError, setCidadeError] = React.useState(false);
    const [logradouroError, setLogradouroError] = React.useState(false);

    const checkError = () => {
        const errUf = uf.length != 2;
        const errCidade = cidade.length < 3;
        const errLogradouro = logradouro.length < 3;

        setUfError(errUf);
        setCidadeError(errCidade);
        setLogradouroError(errLogradouro);

        return errUf || errCidade || errLogradouro;
    }

    const handleStartSearch = () => {
        if (checkError()) return;

        setOpen(false);
        onCheckByAddress({ uf, cidade, logradouro });
    };

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleCancel = () => {
        setOpen(false);
    };
    
    const handleChangeUf = (event: React.ChangeEvent<{ value: unknown }>) => {
        setUf(String(event.target.value));
    };

    const handleChangeCidade = (event: React.ChangeEvent<{ value: string }>) => {
        setCidade(event.target.value);
    };

    const handleChangeLogradouro = (event: React.ChangeEvent<{ value: string }>) => {
        setLogradouro(event.target.value);
    };

    return (
        <>
            <div className={classes.root}>
                <Container className={classes.container}>
                    <Fab
                        onClick={handleClickOpen}
                        aria-label="Search"
                        className={classes.fab}
                        color="primary"
                    >
                        <SearchIcon />
                    </Fab>
                </Container>
            </div>

            <Dialog
                onClose={handleCancel}
                open={open}
                TransitionComponent={AddressSearchTransition}
                keepMounted
                classes={{
                    container: classes.dialogContainer,
                    paper: classes.dialogPaper
                }}
            >
                <DialogTitle>Endereço para pesquisa</DialogTitle>

                <DialogContent>
                    <form>
                        <TextField
                            fullWidth
                            margin="dense"
                            label="Logradouro"
                            type="text"
                            helperText={logradouroError ? 'Insira, no mínimo, 3 caracteres' : ' '}
                            onChange={handleChangeLogradouro}
                            onFocus={() => setLogradouroError(false)}
                            onBlur={() => setLogradouroError(logradouro.length < 3)}
                            error={logradouroError}
                        />

                        <TextField
                            fullWidth
                            margin="dense"
                            label="Cidade"
                            type="text"
                            helperText={cidadeError ? 'Insira, no mínimo, 3 caracteres' : ' '}
                            onChange={handleChangeCidade}
                            onFocus={() => setCidadeError(false)}
                            onBlur={() => setCidadeError(cidade.length < 3)}
                            error={cidadeError}
                        />

                        <TextField
                            select
                            fullWidth
                            margin="dense"
                            label="Estado (UF)"
                            helperText={ufError ? 'Selecione um UF' : ' '}
                            value={uf}
                            error={ufError}
                            onChange={handleChangeUf}
                            onFocus={() => setUfError(false)}
                            onBlur={() => setUfError(uf.length != 2)}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            <option value="" />

                            {UfList.map((uf, index) => (
                                <option
                                    value={uf[0]}
                                    key={index}
                                >
                                    {uf[1]} ({uf[0]})
                                </option>
                            ))}
                        </TextField>
                    </form>
                </DialogContent>
                
                <DialogActions>
                    <Button
                        onClick={handleCancel}
                        color="primary"
                    >
                        Cancelar
                    </Button>
                    
                    <Button
                        onClick={handleStartSearch}
                        color="primary"
                    >
                        Pesquisar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default AddressSearchForm;
