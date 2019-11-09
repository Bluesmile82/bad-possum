import React from "react"

const Checkout = class extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_9VlaHtzfK4Qrl77JydDRpSiM00h3ubfKV1")
  }
  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "prod_G9BBzC41l3LKG8", quantity: 1 }],
      successUrl: `https://badpossumband.com`,
      cancelUrl: `https://badpossumband.com`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }
  render() {
    return (
      <button
        className="button white"
        onClick={event => this.redirectToCheckout(event)}
      >
        Comprar
      </button>
    )
  }
}
export default Checkout