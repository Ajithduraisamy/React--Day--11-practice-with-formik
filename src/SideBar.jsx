import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <>
      <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary vh-100" style={{ width: 280 }}>
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span class="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link to={'listbook'} class="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link to={'createbook'} class="nav-link" aria-current="page">
              Create Book
            </Link>
          </li>
        </ul>
        <hr />
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
            <Link to={'/'}><strong>Sign out</strong></Link>
          </a>
        </div>
      </div>

    </>
  )
}

export default SideBar