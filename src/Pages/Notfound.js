import React from 'react'
import { Link } from "react-router-dom";


export default function Notfound() {
  return (
    <div>
      <h1  className="notfound">404! ERORR (NOT FOUND)</h1>
    <nav>
    <Link to="./notfound">Notfound</Link>
    </nav>
    </div>

    )
}
