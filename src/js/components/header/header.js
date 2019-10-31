import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Title from "./../title";
import Link from "./../link";

const Header = () => {
    const titleFromState = useSelector(state => state.app.header.title);
    return (
        <header className="header">
            <Title className="title-header" typing={true}>
                {titleFromState}
            </Title>
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
