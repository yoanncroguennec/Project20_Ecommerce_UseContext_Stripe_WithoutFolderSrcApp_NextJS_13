import React from 'react'
import { Box, Typography, styled } from '@mui/material'

////////////////////// EXPORT FUNCTION //////////////////////
export default function CheckoutHeader({ checkoutSession }) {
  ////////////////////// STYLES //////////////////////
  const RootCheckoutHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {}
  }))

  const TypoGreen = styled(Typography)(({ theme }) => ({
    color: '#00561B',
    fontWeight: 'bold'
  }))

  const TypoRed = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold'
  }))

  return (
    <RootCheckoutHeader>
      <TypoGreen variant=''>Paiement réussi</TypoGreen>
      <TypoGreen variant='h4'>Merci pour votre commande</TypoGreen>
      <Typography variant=''>
        Merci pour votre commande, nous sommes en train de la traiter. Nous vous
        enverrons une confirmation très bientôt !
      </Typography>
      <TypoRed color='error' variant=''>
        <u>Numéro de la commande :</u>{' '}{''} `{checkoutSession?.payment_intent?.id}`
      </TypoRed>
    </RootCheckoutHeader>
  )
}
