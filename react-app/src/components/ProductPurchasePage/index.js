import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import AllBananasCard from "./AllBananasCard"
import './AllBananas.css'

const AllItemsPurchasePage = () => {
  const [banana, setBanana] = useState([])
  const [carouselPosition, setCarouselPosition] = useState(0)
  const currentUser = useSelector(state => state.session.user)
  const { cart, setCart } = useCart()

  useEffect(() => {
    async function fetchData() {
      const apibanana = await fetch(`/api/items`)

      setBanana(await apibanana.json())
    }
    if (localStorage.getItem(currentUser?.email || 'default')) {
      setCart(JSON.parse(localStorage.getItem(currentUser?.email || 'default')))
    }
    fetchData()
  }, []);

  if (banana) {

    return (
      <div className='all-items-page'>
        <h1 className='all-items-label'>
          Take a look at all of our products.
        </h1>
        <div className="all-bananas-carousel">
          {carouselPosition > 0 &&
            <button
              className='all-bananas-carousel-prev'
              onClick={() => {
                setCarouselPosition(carouselPosition - 1);
              }}
            >
              <i class="fa-solid fa-chevron-left"></i>
            </button>
          }
          <div className="all-bananas-container">
            <div className="all-bananas-inner" style={{ transform: `translateX(-${carouselPosition * 100}%)` }}>
              {banana?.map((bana, i) => (
                <NavLink className='navlink' to={`/items/${bana.id}`}>
                  <AllBananasCard item={bana} idx={i} />
                </NavLink>
              ))}
            </div>
          </div>
          {carouselPosition < (banana.length - 1) &&
            <button
              className='all-bananas-carousel-next'
              onClick={() => {
                setCarouselPosition(carouselPosition + 1);
              }}
            >
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          }
        </div>
      </div>

    )
  } return null
}


export default AllItemsPurchasePage
