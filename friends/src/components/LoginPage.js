import React from 'react'

function LoginPage() {
    return (
        <div>
            <form onSubmit={login}>
                <label htmlFor="username">username</label>
                <input id="username" value={formValues.username} onChange={handleChanges} />
                <label htmlFor="password">password</label>
                <input id="password" value={formValues.password} onChange={handleChanges} />
            </form>
        </div>
    );
}

export default LoginPage