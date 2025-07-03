import React from "react";

export default ()=>{
    const [username,setUsername] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [error,setError] = React.useState("");

    function handleSubmit(event){
        event.preventDefault();
        setError("")
        if(!username.trim()){
            setError("Usenmae is empty.")
            return;
        }
        else if(!password.trim()){
            setError("Password is empty.");
            return;
        }
        console.log("username:" + username);
        console.log("password:" + password);
        setUsername("");
        setPassword("");
    }
    return (
        <>
            <p>Login System</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">帐号:</label>
                    <input
                        id="name"
                        type="text"
                        placeholder={"username"}
                        value={username}
                        onChange={(event) => {
                            setUsername(event.target.value);
                            setError("");
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="pwd">密码:</label>
                    <input
                        id="pwd"
                        type="password"
                        placeholder={"password"}
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                            setError("");
                        }}
                    />
                </div>
                <button type={"submit"}>sumbit</button>
            </form>
            {error && <p style={{color:"red"}}>{error}</p>}
        </>
    )
}