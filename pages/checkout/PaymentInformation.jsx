import React from 'react'
import { Box, Typography, styled } from '@mui/material'

  ////////////////////// EXPORT FUNCTION //////////////////////
export default function PaymentInformation({
  customer,
  discount,
  payment,
  subtotal,
  tax,
  total
}) {
  ////////////////////// STYLES //////////////////////
  const RootPaymentInformation = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    [theme.breakpoints.down('sm')]: {}
  }))

  const BoxPaymentInformation = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column'
  }))

  const BoxInvoiceAddress = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column'
  }))

  const BoxSummary = styled(Box)(({ theme }) => ({
    borderTop: '1px solid rgb(229 231 235)',
    marginTop: '20px'
  }))

  const BoxContentSummary = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between'
  }))

  ////////////////////// DATA //////////////////////
  const listContentSummary = [
    {
      title: `Sous-total :`,
      content: `${(subtotal / 100).toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR'
      })}`
    },
    {
      title: `Remise :`,
      content: `${(discount / 100).toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR'
      })}`
    },
    {
      title: `Taxes :`,
      content: `${(tax / 100).toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR'
      })}`
    },
    {
      title: `Total :`,
      content: `${(total / 100).toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR'
      })}`
    },
    {
      title: ``,
      content: ``
    }
  ]

  ////////////////////// RETURN //////////////////////
  return (
    <div>
      <Typography variant='h4'>Vos informations de Paiement</Typography>
      <RootPaymentInformation>
        {payment?.card && (
          <BoxPaymentInformation>
            <Typography variant='h6'>Information Paiement :</Typography>
            <Typography variant=''>{payment.card.wallet}</Typography>
            <Typography variant=''>
              {payment.card.brand.toUpperCase()}
            </Typography>
            <Typography variant=''>
              Votre carte CB termine par &quot;{payment.card.last4}&quot;
            </Typography>
            <Typography variant=''>
              Expire le &quot;{payment.card.exp_month} / {payment.card.exp_year}
              &quot;
            </Typography>
          </BoxPaymentInformation>
        )}
        <BoxInvoiceAddress>
          <Typography variant='h6'>Adresse de facturation :</Typography>
          <Typography variant=''>Nom : {customer?.name}</Typography>
          <Typography variant=''>Email : {customer?.email}</Typography>
          <Typography variant=''>Pays: {customer?.address.country}</Typography>
          <Typography variant=''>
            Code Postal :{customer?.address.postal_code}
          </Typography>
        </BoxInvoiceAddress>
      </RootPaymentInformation>

      {/* SUMMARY */}
      <Typography variant='h4'>Résumé :</Typography>
      <BoxSummary>
        {listContentSummary.map(({ title, content, index }) => (
          <BoxContentSummary key={index}>
            <Typography variant=''>{title}</Typography>
            <Typography variant=''>{content}</Typography>
          </BoxContentSummary>
        ))}
      </BoxSummary>
    </div>
  )
}
