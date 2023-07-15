import axios from "axios";
import { useState } from "react";

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/register', { email, password })
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Type your email" />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Type your password" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Registration;