import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from 'utils/CartContext'

function BookItem({ book }) {
  const { addItem, sync } = useContext(CartContext)

  async function handleAddItem() {
    await addItem({ book, quantity: 1 })
    await sync()
  }

  return (
    <li class='ast-article-single desktop-align-left tablet-align-left mobile-align-left product type-product post-1138 status-publish first instock product_cat-posters has-post-thumbnail shipping-taxable purchasable product-type-simple'>
      <div class='astra-shop-thumbnail-wrap'>
        <Link
          to={`/books/${book._id}`}
          class='woocommerce-LoopProduct-link woocommerce-loop-product__link image_wrapper'
        >
          <img
            width='1000'
            height='1000'
            src={book.images[0].file}
            class='attachment-woocommerce_thumbnail size-woocommerce_thumbnail'
            alt=''
            decoding='async'
            loading='lazy'
            sizes='(max-width: 1000px) 100vw, 1000px'
          />
        </Link>
        <button
          class='ast-on-card-button ast-select-options-trigger product_type_simple add_to_cart_button ajax_add_to_cart'
          onClick={handleAddItem}
        >
          <span class='ast-card-action-tooltip'>Add to cart</span>
          <span class='ahfb-svg-iconset'>
            <span class='ast-icon icon-bag'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                version='1.1'
                id='ast-bag-icon-svg'
                x='0px'
                y='0px'
                width='100'
                height='100'
                viewBox='826 826 140 140'
                enable-background='new 826 826 140 140'
                xmlSpace='preserve'
              >
                <path d='M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z'></path>
              </svg>
            </span>
          </span>
        </button>
      </div>
      <div class='astra-shop-summary-wrap'>
        {/* <span class="ast-woo-product-category">Posters</span> */}
        <Link to={`/books/${book._id}`} class='ast-loop-product__link'>
          <h2 class='woocommerce-loop-product__title'>{book.name}</h2>
        </Link>
        <span class='price'>
          <span class='woocommerce-Price-amount amount'>
            <bdi>
              {book.price.toLocaleString()}
              {/* <span class="woocommerce-Price-currencySymbol">vnđ</span> */}
            </bdi>
          </span>
        </span>
      </div>
    </li>
  )
}

export default BookItem
