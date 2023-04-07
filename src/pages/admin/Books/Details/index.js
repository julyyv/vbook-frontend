import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosClient from 'utils/axiosClient'

function BookDetail() {
  const { id } = useParams()

  const [book, setBook] = useState({})
  console.log(book)

  useEffect(() => {
    axiosClient.get(`/books/${id}`).then((rs) => setBook(rs.data.data.doc))
  }, [])

  return (
    <div className='card card-success'>
      <div className='card-header'>
        <h3 className='card-title'>Book detail</h3>
        <span className='ml-5'>ID: {id}</span>
        <Link to={`/admin/books/${id}/edit`} className='btn btn-primary float-right'>
          Edit
        </Link>
      </div>
      <form>
        <div className='card-body'>
          {/* <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>ID</label>
            <input type='text' className='form-control' defaultValue={id} disabled />
          </div> */}
          <div className='row'>
            <div className='form-group col-10'>
              <label htmlFor='exampleInputPassword1'>Name</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.name} disabled />
            </div>
            <div className='form-group col-2'>
              <label htmlFor='exampleInputPassword1'>language</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.language} disabled />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>description</label>
            <textarea type='text' className='form-control' placeholder='' defaultValue={book.description} disabled />
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>quantity</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.quantity} disabled />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>status</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.status} disabled />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>price</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.price} disabled />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>discountPercent</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.discountPercent} disabled />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>author</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.author?.name} disabled />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>publisher</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.publisher?.name} disabled />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>translator</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.translator} disabled />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>width</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.width} disabled />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>height</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.height} disabled />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>depth</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.depth} disabled />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>weight</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.weight} disabled />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>noPage</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.noPage} disabled />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>form</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.form} disabled />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>rate</label>
            <input type='text' className='form-control' placeholder='' defaultValue={book.rate} disabled />
          </div>
        </div>
        {/* <div className='card-footer'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div> */}
      </form>
    </div>
  )
}

export default BookDetail
