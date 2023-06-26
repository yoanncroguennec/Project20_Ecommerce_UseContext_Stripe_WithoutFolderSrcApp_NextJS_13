import { Box, Button, Typography, styled } from "@mui/material";
// UTILS LIBS
import { checkout } from "../../../utils/libs/checkout";
import { useCart } from "@/utils/contexts";

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

    const BtnResetCart = styled(Box)(({ theme }) => ({
      alignItems: "center",
      background: "#FF0000",
      borderRadius: "8px",
      color: "#FFF",
      display: "flex",
      justifyContent: "center",
      marginTop: "24px",
      padding: "12px 24px",
    }));

    const BoxContinueShopping = styled(Box)(({ theme }) => ({
      alignItems: "center",
      background: "#FFF",
      border: "2px solid rgb(5 150 105)",
      borderRadius: "8px",
      color: "rgb(5 150 105)",
      display: "flex",
      fontWeight: "bold",
      justifyContent: "center",
      padding: "12px 24px",
    }));

  const BoxContinuePurchasing = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  }));

  ////////////////////// JS //////////////////////
   const { resetCart } = useCart();

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
      {items.length === 0 ? (
        <BoxContinueShopping onClick={handleClose}>
          <Typography variant='h5'>Faire du shopping</Typography>
        </BoxContinueShopping>
      ) : (
        <>
          <BoxBtnPay onClick={handleCheckout}>
            <Typography variant='h5'>Payer</Typography>
          </BoxBtnPay>
          <BtnResetCart onClick={resetCart}>
            <Typography variant='h5'>Vider le panier</Typography>
          </BtnResetCart>
          <BoxContinuePurchasing>
            <Typography style={{ fontWeight: "bold" }} variant='h5'>
              OU
            </Typography>
            <BoxContinueShopping type='button' onClick={handleClose}>
              <Typography variant='h5'>Continuer le shopping</Typography>
            </BoxContinueShopping>
          </BoxContinuePurchasing>
        </>
      )}
    </RootFooterModalCart>
  );
}
