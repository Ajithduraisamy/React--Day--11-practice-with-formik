import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './App.css'
import { Api_url } from './URL'
import { useNavigate } from 'react-router-dom';

function ListBook() {
  const [apidata, setApidata] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    getapidata()
  }, [])

  const getapidata = async () => {
    var res = await axios.get(Api_url)
    setApidata(res.data)
  }

  const deleteBook = async (id) => {
    await axios.delete(Api_url + id);
    getapidata();
  }

  const editBook = async (data) => {
    localStorage.setItem("id", data.id)
    localStorage.setItem("title", data.title)
    localStorage.setItem("author", data.author)
    localStorage.setItem("isbn", data.isbn)
    localStorage.setItem("publication", data.publication)
    navigate(`/portal/editbook/${data.id}`);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {
            apidata.map(data =>
              <div className="col-lg-4">
                <div class="card" style={{ width: "18rem", height: "30rem" }} key={data.id}>
                  <img src="https://clipart-library.com/images/XrijgAbcR.jpg" class="card-img-top" alt="..." />
                  <h5 class="card-header"><b>Book Title:</b> {data.title}</h5>
                  <div class="card-body">
                    <p class="card-text"><b>Author Name:</b> {data.author}</p>
                    <p class="card-text"><b>ISBN Number:</b> {data.isbn}</p>
                    <p class="card-text"><b>Publish Date:</b> {data.publication}</p>
                    <div className='buttons card-footer'>
                      <button className="btn btn-outline-warning" onClick={() => editBook(data)}>Edit</button>
                      <button className="btn btn-outline-danger" onClick={() => deleteBook(data.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }

        </div>
      </div>
    </>
  )
}

export default ListBook