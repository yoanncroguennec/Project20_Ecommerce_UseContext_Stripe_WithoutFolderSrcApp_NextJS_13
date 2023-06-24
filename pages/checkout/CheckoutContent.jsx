import { Box, Typography, styled } from '@mui/material'
// NEXT
import Image from 'next/image'
import Link from 'next/link'
// PAGES & COMMONS
import PaymentInformation from './PaymentInformation'

////////////////////// EXPORT FUNCTION //////////////////////
export default function CheckoutContent({
  customer,
  discount,
  payment,
  products,
  subtotal,
  tax,
  total
}) {
  ////////////////////// STYLES //////////////////////
  const RootCheckoutContent = styled(Box)(({ theme }) => ({
    borderTop: '1px solid rgb(229 231 235)',
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {}
  }))

  const BoxProductItem = styled(Box)(({ theme }) => ({
    borderBottom: '1px solid rgb(229 231 235)',
    display: 'flex',
    marginLeft: '24px',
    padding: '40px 0'
  }))

  const stylesIMG = {
    background: 'rgb(243 244 246)',
    borderRadius: '15px',
    flex: 'none',
    height: '150px',
    objectFit: 'cover',
    objectPosition: 'center',
    width: '150px'
  }

  const BoxInfoItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column'
  }))

  const BoxTitleDesc = styled(Box)(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column'
  }))

  const TypoTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "bold",
  }))
  const BoxQtyAndPrice = styled(Box)(({ theme }) => ({
    alignItems: 'flex-end',
    display: 'flex',
    marginTop: '84px'
  }))

  return (
    <RootCheckoutContent>
      <Typography variant='h4'>Votre commande</Typography>
      <Typography variant='h6'>Liste des articles</Typography>
      {products?.map(product => (
        <BoxProductItem key={product.id}>
          <Image
            src={product.images[0]}
            alt={product.description}
            height={250}
            width={250}
            style={stylesIMG}
          />
          <BoxInfoItem>
            <BoxTitleDesc>
              <Link href={`${product.url}`}>
                <TypoTitle variant='h5'>{product.name}</TypoTitle>
              </Link>
              <Typography variant=''>{product.description}</Typography>
            </BoxTitleDesc>
            <BoxQtyAndPrice>
              <div style={{ display: 'flex' }}>
                <Typography variant=''>Quantité</Typography>
                <Typography variant=''>{product.quantity}</Typography>
              </div>
              <div style={{ display: 'flex', paddingLeft: '16px' }}>
                <Typography variant=''>Prix</Typography>
                <Typography variant=''>
                  {' '}
                  {(product.price / 100).toLocaleString('fr-FR', {
                    style: 'currency',
                    currency: 'EUR'
                  })}
                </Typography>
              </div>
            </BoxQtyAndPrice>
          </BoxInfoItem>
          <hr />
        </BoxProductItem>
      ))}

      {/* PAYMENT INFORMATION */}
      <PaymentInformation
        customer={customer}
        discount={discount}
        payment={payment}
        subtotal={subtotal}
        tax={tax}
        total={total}
      />
    </RootCheckoutContent>
  )
}
