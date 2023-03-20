import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div style={{ background: 'yellow' }}>
            <p>Logo</p>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/about-us">about us</Link>
                </li>
                <li>
                    <Link to="/funds">funds</Link>
                </li>
            </ul>
        </div>
    )
}
