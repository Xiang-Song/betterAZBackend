import React, {useState} from 'react'
import axios from 'axios'

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [inputValue, setInputValue] = useState({username: '', password:''});
    const [error, setError] = useState('');
    

    const handleInput = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async () => {
        const {username, password} = inputValue;
        try {
            const res = await axios.post('https://floating-thicket-57272.herokuapp.com/users/login',{
                username, 
                password
            });
            localStorage.setItem('JWT', res.data.token);
            setIsLogin(true);
            setInputValue({username: '', password:''});
            setError('');
        } catch (error){
            console.error(error.response.data)
        if (error.response.data==='this username not exist' || error.response.data==='passwords do not match') {
            setError(error.response.data);
        }
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('JWT');
        setIsLogin(false);
    }

    if (!isLogin) {
        return (
            <div>
                <label>Admin Sign In</label>
                <input name="username" value={inputValue.username} onChange={handleInput} />
                <input name="password" value={inputValue.password} onChange={handleInput} />
                <button onClick={handleLogin}>Login</button>
                {error? <p>{error}</p>: ''}
            </div>
        )
    }
    return (
        <div>
            <button onClick={handleLogout}>Log out</button>
            <div>
                <label>Add New Banner</label>
                <input />
            </div>

            <div>
                <label>Add More News</label>
                <input />
            </div>

            <div>
                <label>Add New Event</label>
                <input />
            </div>

            <div>
                <label>Add New Sign Location</label>
                <input />
            </div>
        </div>
    )
    
}

export default Login
