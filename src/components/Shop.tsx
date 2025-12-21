//imports
import './Shop.css'

function Shop() {
  return (
    <>
      <div className="shop-box">
        <div className='flex-box'>
          <div className='row1'>
            <div className="img"></div>
          </div>
          <div className='row2'>
            <p>ThisIsAFakeName</p>
            <p>Price</p>
          </div>
        </div>
        <button>Add to cart</button>
      </div>
    </>
  );
}

export default Shop;