/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react'
import useSWR from 'swr'
// NEXT
import { useRouter } from 'next/router'
// PAGES & COMMONS
import CheckoutHeader from './CheckoutHeader'
import CheckoutContent from './CheckoutContent'
// UTILS CONTEXTS
import { useCart } from '../../utils/contexts'
// UTILS FUNCTIONS
import { shootFireworks } from '../../utils/functions/utils'
// import { useCart } from '../../utils/contexts/CartContext'

const fetcher = (...args) => fetch(...args).then(res => res.json())

////////////////////// EXPORT FUNCTION //////////////////////
export default function CheckoutSuccessPage() {

    useEffect(() => {
        shootFireworks()
    }, [])

  const { resetCart } = useCart()
  useEffect(() => {
    resetCart()
  }, [resetCart])

  const {
    query: { sessionId }
  } = useRouter()

  const URL = sessionId ? `/api/stripe/sessions/${sessionId}` : null
  const { data: checkoutSession, error } = useSWR(URL, fetcher)

  if (error) return <div>N&apos;a pas réussi à charger la session</div>;

  const customer = checkoutSession?.customer_details
  const products = checkoutSession?.line_items?.data?.map(item => ({
    ...item.price.product,
    price: item.price.unit_amount,
    quantity: item.quantity
  }))

  const payment =
    checkoutSession?.payment_intent?.charges?.data[0]?.payment_method_details
  const subtotal = checkoutSession?.amount_subtotal
  const total = checkoutSession?.amount_total
  const discount = checkoutSession?.total_details?.amount_discount
  const tax = checkoutSession?.total_details?.amount_tax

  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', padding: '64px 16px' }}>
      <CheckoutHeader checkoutSession={checkoutSession} />

      <CheckoutContent
        customer={customer}
        discount={discount}
        payment={payment}
        products={products}
        subtotal={subtotal}
        tax={tax}
        total={total}
      />
    </div>
  )
}
