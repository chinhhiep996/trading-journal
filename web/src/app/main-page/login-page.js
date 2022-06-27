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

import styles from './login-page.module.css';

export function LoginPage() {
    const [values, setValues] = useState({
        username: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleLogin = () => {
        console.log(values);
    }

    return (
        <div className={styles['login-page']}>
            <div className={styles['login-forms']}>
                <Typography variant="h2" gutterBottom component="div">
                    Login
                </Typography>

                <div className={styles['username']}>
                    <TextField
                        required
                        fullWidth
                        label="Username"
                        value={values.username}
                        onChange={handleChange('username')}
                    />
                </div>

                <div className={styles['password']}>
                    <FormControl required fullWidth variant="outlined">
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
                                        onClick={handleShowPassword}
                                        onMouseDown={handleShowPassword}
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

                <div className={styles['login-button']}>
                    <Button variant="contained" onClick={handleLogin}>Login</Button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
