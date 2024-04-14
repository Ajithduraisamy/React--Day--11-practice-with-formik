import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div class="container py-4">
            <header class="pb-3 mb-4 border-bottom">
                <nav class="navbar">
                    <div class="container-fluid">
                        <a href="/" class="d-flex align-items-center text-body-emphasis text-decoration-none">
                            <span class="fs-4"><h2>Books Library</h2></span>
                        </a>
                        <form class="d-flex" role="search">
                        <Link to={'/portal/listbook'} class="btn btn-outline-success" type="submit">Dashborad</Link>
                            {/* <Link to={'/login'} class="btn btn-outline-success" type="submit">Login</Link> */}
                        </form>
                    </div>
                </nav>
            </header>
            <div class="container my-5">
                <div class="p-5 text-center bg-body-tertiary rounded-3">
                    <h1 class="text-body-emphasis">Books</h1>
                    <p class="col-lg-8 mx-auto fs-5 text-muted">
                        Books are sources of knowledge, inspiration, and entertainment. They span diverse genres, from fiction and non-fiction to poetry and drama, offering something for every reader. Books can transport us to imaginary worlds, teach us new skills, or provide fresh perspectives on life.
                    </p>
                    <div class="d-inline-flex gap-2 mb-5">
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home