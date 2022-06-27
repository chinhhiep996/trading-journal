import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';

import styles from './login-page.module.css';

export function RegisterPage() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        showPassword: false,
        confirmPassword: '',
        showConfirmPassword: false
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleShowPassword = (prop) => () => {
        setValues({ ...values, [prop]: !values[prop] });
    };

    const handleLogin = () => {
        console.log(values);
    }

    return (
        <div className={styles['login-page']}>
            <div className={styles['login-forms']}>
                <Typography variant="h2" gutterBottom component="div">
                    Register
                </Typography>
                <Box sx={{ mb: 2, textAlign: 'left' }}>
                    <TextField
                        required
                        fullWidth
                        label="FirstName"
                        value={values.firstName}
                        onChange={handleChange('firstName')}
                    />

                    {/* <Typography
                        variant="caption"
                        display="block"
                        component="span"
                        sx={{ color: 'red', paddingLeft: 1 }}
                    >
                        Caption text
                    </Typography> */}
                </Box>

                <div className={styles['lastName']}>
                    <TextField
                        required
                        fullWidth
                        sx={{ mb: 2 }}
                        label="LastName"
                        value={values.lastName}
                        onChange={handleChange('lastName')}
                    />
                </div>

                <div className={styles['username']}>
                    <TextField
                        required
                        fullWidth
                        sx={{ mb: 2 }}
                        label="Username"
                        value={values.username}
                        onChange={handleChange('username')}
                    />
                </div>

                <div className={styles['password']}>
                    <FormControl
                        required
                        fullWidth
                        variant="outlined"
                        sx={{ mb: 2 }}
                    >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleShowPassword('showPassword')}
                                        onMouseDown={handleShowPassword('showPassword')}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>

                <div className={styles['confirmPassword']}>
                    <FormControl
                        required
                        fullWidth
                        variant="outlined"
                        sx={{ mb: 2 }}
                    >
                        <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            id="confirm-password"
                            type={values.showConfirmPassword ? 'text' : 'password'}
                            value={values.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleShowPassword('showConfirmPassword')}
                                        onMouseDown={handleShowPassword('showConfirmPassword')}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Confirm Password"
                        />
                    </FormControl>
                </div>

                <div className={styles['login-button']}>
                    <Button variant="contained" onClick={handleLogin}>Submit</Button>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
