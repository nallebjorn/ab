import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Title from "./../title";
import Link from "./../link";
import typeText from "Utils/typing-text";

const Header = () => {
    const titleFromState = useSelector(state => state.header.title);
    const [title, setTitle] = useState("");
    const [interval, setNewInterval] = useState(0);
    useEffect(() => {
        clearInterval(interval);
        setNewInterval(typeText(titleFromState, setTitle, 150));
    }, [titleFromState]);

    return (
        <header className="header">
            <Title className="title-header">{title}</Title>
            <nav className="nav">
                <Link
                    href="https://mydiary-bitse.mongodbstitch.com/about"
                    outside={true}
                    target="_blank"
                    className="nav__link"
                >
                    Diary
                </Link>
                <Link href="/about" className="nav__link">
                    About
                </Link>
                <Link href="/catalog" className="nav__link">
                    Catalog
                </Link>
                <Link href="/login" className="nav__link">
                    Login
                </Link>
            </nav>
        </header>
    );
};

export default Header;
