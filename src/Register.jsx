import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div class="container py-4">
            <div className="row login">
                <main class="form-signin w-100 m-auto">
                    <form>
                        <h1 class="h3 mb-3 fw-normal">Please Register here</h1>

                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="sbfmys" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" fdprocessedid="bluzci" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div class="form-check text-start my-3">
                            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        <button class="btn btn-primary w-100 py-2" type="submit" fdprocessedid="23k58s">Sign Up</button>
                    </form>
                    <div>Already have an account? <Link to={"/login"}>Click here to login</Link></div>
                </main>
            </div>
        </div>
    )
}

export default Register