import React from 'react'

function LoginPage() {
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
        
    }

    return (
        <div>
            <form onSubmit={login}>
                <label htmlFor="username">username</label>
                <input  id="username"
                        value={formValues.username}
                        onChange={handleChanges} />
                <label htmlFor="password">password</label>
                <input 
                        id="password" 
                        value={formValues.password} 
                        onChange={handleChanges} />
            </form>
        </div>
    );
}

export default LoginPage