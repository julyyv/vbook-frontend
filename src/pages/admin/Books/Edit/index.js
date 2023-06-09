import { languageEnum as bookLanguageEnum, formEnum as bookformEnum, statusEnum as bookStatusEnum } from 'enums/Book'
import { isEmptyObject } from 'helper'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosClient from 'utils/axiosClient'
import Image from 'pages/components/Image'

function BookEdit() {
  const { id } = useParams()

  const [book, setBook] = useState({})
  // console.log(book, book.length)
  const [authors, setAuthors] = useState([])
  // console.log(authors)
  const [publishers, setPublishers] = useState([])
  // console.log(publishers)

  const imagesRef = useRef()

  const navigate = useNavigate()

  useEffect(() => {
    axiosClient.get(`/books/${id}`).then((rs) => setBook(rs.data.data.doc))
  }, [])

  useEffect(() => {
    if (isEmptyObject(book)) return

    axiosClient.get(`/authors/get-all`).then((rs) => setAuthors(rs.data.data.docs))
    axiosClient.get(`/publishers/get-all`).then((rs) => setPublishers(rs.data.data.docs))
  }, [book])

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    // console.log(formData.get('name'));
    Object.values(imagesRef.current.files).forEach((file) => formData.append('images', file))

    axiosClient
      .patch(`/books/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(() => navigate(`/admin/books/${id}`))
      .catch((err) => console.log(err))
  }

  return (
    <div className='card '>
      <div className='card-header bg-dark'>
        {/* <button onClick={() => navigate(-1)} className='btn btn-primary me-3'>
          <i className='fa-solid fa-angle-left'></i> Back
        </button> */}
        <h3 className='card-title float-none d-inline'>Book detail</h3>
        <span className='ml-5'>ID: {id}</span>
        {/* <Link to={`/admin/books/${id}`} className='btn btn-primary float-right'>
          <i className='fa-solid fa-angle-left'></i> Back
        </Link> */}
      </div>
      <form onSubmit={handleSubmit}>
        <div className='card-body'>
          {/* <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>ID</label>
            <input type='text' className='form-control' defaultValue={id} />
          </div> */}
          <div className='row'>
            <div className='form-group col-10'>
              <label htmlFor='exampleInputPassword1'>Name</label>
              <input type='text' name='name' className='form-control' placeholder='' defaultValue={book.name} />
            </div>
            <div className='form-group col-2'>
              <label htmlFor='exampleInputPassword1'>language</label>
              <select name='language' className='form-control'>
                {Object.keys(bookLanguageEnum).map((language) => (
                  <option key={language} selected={language == book.language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>description</label>
            <textarea type='text' name='description' className='form-control' placeholder='' defaultValue={book.description} />
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>quantity</label>
              <input type='text' name='quantity' className='form-control' placeholder='' defaultValue={book.quantity} />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>status</label>
              <select name='status' className='form-control'>
                {Object.keys(bookStatusEnum).map((status) => (
                  <option key={status} selected={status == book.status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>price</label>
              <input type='text' name='price' className='form-control' placeholder='' defaultValue={book.price} />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>discountPercent</label>
              <input type='text' name='discountPercent' className='form-control' placeholder='' defaultValue={book.discountPercent} />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>author</label>
              <select name='author' className='form-control'>
                {authors?.map((author) => (
                  <option key={author._id} selected={author._id == book.author?._id} value={author._id}>
                    {author.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>publisher</label>
              <select name='publisher' className='form-control'>
                {publishers?.map((publisher) => (
                  <option key={publisher._id} selected={publisher._id == book.publisher?._id} value={publisher._id}>
                    {publisher.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>translator</label>
              <input type='text' name='translator' className='form-control' placeholder='' defaultValue={book.translator} />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>width</label>
              <div className='input-group'>
                <input type='text' name='width' className='form-control' placeholder='' defaultValue={book.width} />
                <div className='input-group-append'>
                  <span className='input-group-text'>CM</span>
                </div>
              </div>
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>height</label>
              <div className='input-group'>
                <input type='text' name='height' className='form-control' placeholder='' defaultValue={book.height} />
                <div className='input-group-append'>
                  <span className='input-group-text'>CM</span>
                </div>
              </div>
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>depth</label>
              <div className='input-group'>
                <input type='text' name='depth' className='form-control' placeholder='' defaultValue={book.depth} />
                <div className='input-group-append'>
                  <span className='input-group-text'>CM</span>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>weight</label>
              <div className='input-group'>
                <input type='text' name='weight' className='form-control' placeholder='' defaultValue={book.weight} />
                <div className='input-group-append'>
                  <span className='input-group-text'>gram</span>
                </div>
              </div>
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>noPage</label>
              <input type='text' name='noPage' className='form-control' placeholder='' defaultValue={book.noPage} />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>form</label>
              <select name='form' className='form-control'>
                {Object.keys(bookformEnum).map((form) => (
                  <option key={form} selected={form == book.form} value={form}>
                    {form}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* <div className='row'>
            <div className='form-group col-1'>
              <label htmlFor='exampleInputPassword1'>rate</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.rate} disabled />
            </div>
          </div> */}
          <div className='row'>
            <label htmlFor='exampleInputPassword1'>Ảnh</label>
            <div className='input-group col-6'>
              <input type='file' className='form-control' id='inputGroupFile04' aria-describedby='inputGroupFileAddon04' aria-label='Upload' multiple ref={imagesRef} />
            </div>
            <div className='input-group col-12 mt-2'>
              {book.images?.map((image, i) => (
                <Image key={i} src={image.file} style={{ height: '50px' }} />
              ))}
            </div>
          </div>
        </div>
        <div className='card-footer'>
          <button type='submit' className='btn btn-primary float-right'>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default BookEdit
