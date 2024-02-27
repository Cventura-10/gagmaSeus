function Welcome({ isLoggedIn }) {
    return <div>{isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please log in.</h1>}</div>;
}

export default Welcome;
