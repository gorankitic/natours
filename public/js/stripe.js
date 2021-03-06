import axios from 'axios'
import { showAlert } from './alerts'

export const bookTour = async tourId => {
    const stripe = Stripe('pk_test_51IS2CMDqlnqZ5tYidWcJLISieoidt4TBfSopDmt8Srls7nAhi31tetAYXKwYECzBGLHHQFdkvxwZU4UIQwmXtcUZ00scIztlpK')
    try {
        // 1. Get checkout session from API
        const session = await axios(`http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`)
        // 2. Create checkout form + charge credit card  
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        })
    } catch (err) {
        console.log(err)
        showAlert('error', err)
    }
}