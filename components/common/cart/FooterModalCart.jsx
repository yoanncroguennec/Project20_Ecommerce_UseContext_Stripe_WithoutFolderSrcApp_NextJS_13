import { Box, Typography, styled } from '@mui/material'
// UTILS LIBS
import { checkout } from '../../../utils/libs/checkout'


////////////////////// EXPORT FUNCTION //////////////////////
export default function FooterModalCart({ handleClose, items }) {
  ////////////////////// STYLES //////////////////////
  const RootFooterModalCart = styled(Box)(({ theme }) => ({
    borderTop: "1px solid rgb(229 231 235)",
    padding: "24px 16px",
    [theme.breakpoints.down("sm")]: {},
  }));

  const BoxPrice = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
  }));

  const BoxBtnPay = styled(Box)(({ theme }) => ({
    alignItems: "center",
    background: "rgb(5 150 105)",
    borderRadius: "8px",
    color: "#FFF",
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
    padding: "12px 24px",
  }));

  const BoxContinuePurchasing = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
    textAlign: "center",
  }));

  ////////////////////// JS //////////////////////
  function handleCheckout(e) {
    e.preventDefault();
    checkout(items);
  }

  const subTotal = items.reduce((acc, curr) => (acc += curr.unit_amount), 0);

  ////////////////////// RETURN //////////////////////
  return (
    <RootFooterModalCart>
      <BoxPrice>
        <Typography variant=''>Sous-total :</Typography>
        <Typography variant=''>
          {(subTotal / 100).toLocaleString("fr-FR", {
            style: "currency",
            currency: "EUR",
          })}
        </Typography>
      </BoxPrice>
      <Typography color='error' variant=''>
        Les frais d&apos;expédition et les taxes sont calculés au moment du
        paiement.
      </Typography>
      <BoxBtnPay onClick={handleCheckout}>
        <Typography variant='h5'>Payer</Typography>
      </BoxBtnPay>
      <BoxContinuePurchasing>
        <Typography variant=''>
          ou{" "}
          <button
            type='button'
            style={{ color: "rgb(5 150 105)" }}
            onClick={handleClose}
          >
            Continuer le Shopping
            <span aria-hidden='true'> &rarr;</span>
          </button>
        </Typography>
      </BoxContinuePurchasing>
    </RootFooterModalCart>
  );
}
