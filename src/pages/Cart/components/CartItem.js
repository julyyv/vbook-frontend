import { useContext } from "react"
import CartContext from "utils/CartContext"

function CartItem({ cartItem }) {
  // console.log("cartItem rerender")
  const { updateItem } = useContext(CartContext)

  function handleIncrease() {
    console.log('increase');
    updateItem({ book: cartItem.book._id, quantity: cartItem.quantity + 1 })
  }
  function handleDecrease() {
    // console.log('decrease');
    updateItem({ book: cartItem.book._id, quantity: cartItem.quantity - 1 })
  }
  function handleChange(e) {
    updateItem({ book: cartItem.book._id, quantity: e.target.value })
  }
  return (
    <tr className="cart_item">
      <td>
        <div className='media'>
          <div className='d-flex'>
            <img src='assets/img/arrivel/arrivel_1.png' alt='' />
          </div>
          <div className='media-body'>
            <img src={cartItem.book.images[0].file}/>
            <p>{cartItem.book.name}</p>
          </div>
        </div>
      </td>
      <td>
        <h4>{cartItem.book.price.toLocaleString()}</h4>
      </td>
      <td>
        <div className='product_count'>
          <div class='input-group input-group-sm mb-3'>
            <button class='input-group-text' onClick={handleDecrease}>
              -
            </button>
            <input
              type='text'
              class='form-control p-0 text-center'
              value={cartItem.quantity}
              onChange={handleChange}
              style={{ width: '50px' }}
            />
            <button class='input-group-text' onClick={handleIncrease}>
              +
            </button>
          </div>
        </div>
      </td>
      <td>
        <h4>{(cartItem.book.price * +cartItem.quantity).toLocaleString()}</h4>
      </td>
    </tr>
  )
}

export default CartItem
