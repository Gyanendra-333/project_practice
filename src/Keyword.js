
import React from 'react'

export default function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <a className="navbar-brand" href="no">Vision.Com</a> */}
                    <button className="btn btn-outline-info" type="submit" >Vision.Com</button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="Home">About </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="Home">Contact </a>
                            </li>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    );
}

