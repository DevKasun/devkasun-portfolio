import React from 'react'

const NavBar = () => {
    return (
        <>
            <style jsx>{`
                header {
                    position: fixed;
                    width: 65px;
                    height: 70%;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    margin: auto 0;
                    background-color: rgba(255, 255, 255, 0.6);
                    z-index: 5;
                    transition: all 450ms ease-out;
                }
                header:hover {
                    left: 1%;
                    background-color: rgba(255, 255, 255, 0.8);
                }
            `}</style>
            <header>
                <nav>
                    <ul>

                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavBar;