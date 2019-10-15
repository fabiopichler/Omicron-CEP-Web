import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Container, TextField, IconButton } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';

import { CepFormContainer } from './CepFormContainer';
import { ICepFormProps } from './ICepFormProps';
import { Status } from '../../../../models/Status';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: theme.palette.primary.main,
            marginBottom: theme.spacing(2),
            boxShadow: theme.shadows[3],
        },
        textField: {
            margin: 0,
            
            '& label': {
                color: 'rgba(255,255,255,.8)',
            },
            '& label.Mui-focused': {
                color: 'rgba(0,0,0,.5)',
            },
            '& input': {
                transition: 'color 200ms',
                color: 'white',
            },
            '& button': {
                transition: 'color 200ms',
                color: 'white',
                '&.Mui-disabled': {
                    color: 'rgba(255,255,255,.5)',
                }
            },
            '& .Mui-focused': {
                '& input': {
                    color: 'rgba(0,0,0,.8)',
                },
                '& button': {
                    color: 'rgba(0,0,0,.8)',
                    '&.Mui-disabled': {
                        color: 'rgba(0,0,0,.3)',
                    }
                },
            },
        },
        input: {
            borderRadius: 0,
            background: teal[500],
            '&.MuiFilledInput-underline::before': {
                borderBottom: '1px solid rgba(255, 255, 255, .7)',
            },
        },
    })
);

const CepForm: React.FC<ICepFormProps> = props => {
    const { cepState: { status }, checkCep, setCurrentSearch } = props;

    const classes = useStyles(props);

    const [cep, setCep] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        setCurrentSearch(cep);
        checkCep(cep);
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value.replace(/[^\d]/g, '');

        if (value.length > 8)
            return;

        setCep(value.replace(/(\d{5})(\d)/, '$1-$2'));
    };

    const ButtonSubmit = (
        <IconButton
            edge="end"
            color="inherit"
            aria-label="Search"
            disabled={cep.length !== 9 || status === Status.Loading}
            type="submit"
        >
            <SearchIcon />
        </IconButton>
    );

    return (
        <form
            onSubmit={handleSubmit}
            className={classes.root}
        >
            <Container>
                <TextField
                    value={cep}
                    onChange={handleTextChange}
                    label="Insira um CEP para pesquisar"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    fullWidth
                    InputProps={{
                        className: classes.input,
                        endAdornment: ButtonSubmit
                            
                    }}
                />
            </Container>
        </form>
    );
};

export default CepFormContainer(CepForm);
