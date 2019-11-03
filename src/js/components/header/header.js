import React from "react";
import { useSelector } from "react-redux";
import Title from "./../title";
import Link from "./../link";

const Header = () => {
    const titleFromState = useSelector(state => state.app.header.title);
    const isLogged = useSelector(state => state.app.user.isLogged);
    return (
        <header className="header">
            <Title className="title-header" typing={true}>
                {titleFromState}
            </Title>
            <nav className="nav">
                <Link href="/" className="nav__link">
                    Home
                </Link>
                <Link href="/about" className="nav__link">
                    About
                </Link>
                {isLogged ? (
                    <React.Fragment>
                        <Link href="/profile" className="nav__link">
                            Profile
                        </Link>
                        <Link href="/logout" className="nav__link">
                            Logout
                        </Link>
                    </React.Fragment>
                ) : (
                    <Link href="/login" className="nav__link">
                        Login
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
