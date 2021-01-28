import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function LoginPage() {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState({
        username:'', 
        password: '',
    });

    const handleChanges = e => {
        const { name, value } = e.target;
        setFormValues({
            ... formValues,
            [name]: value
        })
    }

    const login = e => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', formValues)
        .then(res => console.log(res))
        localStorage.setItem('token', res.data.payload);
        push('/friends');
        .catch(err => console.log(err));
    };

    return (
        <div>
            <form onSubmit={login}>
                <label htmlFor="username">username</label>
                <input  id="username"
                        value={formValues.username}
                        name="username"
                        onChange={handleChanges} />
                <label htmlFor="password">password</label>
                <input 
                        id="password" 
                        type="password"
                        value={formValues.password} 
                        name="password"
                        onChange={handleChanges} />
                <button>Login</button>
            </form>
        </div>
    );
}

export default LoginPage