export default function TernaryOperator() {
    let LoggedIn = true;
    return (
        <div className="wd-ternary-operator">
            <h4>Logged In</h4>
            { LoggedIn ? <p>Welcome!</p> : <p>Please Login!</p>} <hr />
        </div>
    )
}