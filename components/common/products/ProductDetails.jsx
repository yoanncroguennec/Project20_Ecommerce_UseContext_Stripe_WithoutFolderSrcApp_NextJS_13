import { useState, useEffect } from 'react'
import { Box, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
// NEXT
import Image from 'next/image'
// UTILS CONTEXTS
import { useCart } from '../../../utils/contexts'

////////////////////// EXPORT FUNCTION //////////////////////
export default function ProductDetails({ price }) {
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  ////////////////////// STYLES //////////////////////
  const RootProductDeails = styled(Box)(({ theme }) => ({
    padding: "5px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {},
  }));

  const BoxImg = styled(Box)(({ theme }) => ({
    borderRadius: "8px",
    position: "relative",
    height: "288px",
    overflow: "hidden",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "200px",
    },
  }));

  const stylesImg = {
    objectFit: "scale-down",
  };

  const BoxTitleDesc = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    height: "100px",
    marginTop: "16px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "150px",
    },
  }));

  const TypoBold = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
  }));

  const BoxPrice = styled(Box)(({ theme }) => ({
    alignItems: "flex-end",
    borderRadius: "8px",
    display: "flex",
    height: "270px",
    justifyContent: "flex-end",
    left: 0,
    overflow: "hidden",
    padding: "16px",
    position: "absolute",
    right: 0,
    top: 0,
    [theme.breakpoints.down("sm")]: {
      height: "160px",
    },
  }));

  const TypoPrice = styled(Typography)(({ theme }) => ({
    color: "#FFF",
    position: "relative",
    textShadow: "2px 2px 5px #000",
  }));

  const BtnAddToCart = styled(Box)(({ theme }) => ({
    background: "rgb(243 244 246)",
    borderRadius: "15px",
    padding: "15px",
    position: "relative",
  }));

  ////////////////////// JS //////////////////////
  const { items, addItem } = useCart();
  const [error, setError] = useState("");
  const { product, unit_amount } = price;

  const addItemToCart = (price) => {
    const found = items.find((p) => p.id === price.id);
    // toast.success(`ajouté au panier`)
    if (found) {
      setError("L'article a était déjà était ajouté.");
      return;
    }
    addItem(price);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setError(""), 3000);
    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <div>
      <RootProductDeails>
        <BoxImg>
          <Image
            src={product.images[0]}
            alt={product.description}
            style={stylesImg}
            layout='fill'
          />
        </BoxImg>
        <BoxTitleDesc>
          <TypoBold variant={matches ? "" : "h6"}>
            {product.name}
          </TypoBold>
          <Typography variant=''>{product.description}</Typography>
        </BoxTitleDesc>
        <BoxPrice>
          <TypoPrice variant='h6'>
            {(unit_amount / 100).toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
            })}
          </TypoPrice>
        </BoxPrice>
      </RootProductDeails>
      <div>
        <BtnAddToCart onClick={() => addItemToCart(price)} style={{}}>
          Ajouter au panier
        </BtnAddToCart>
        {error && (
          <TypoBold color='error' style={{ fontWeight: "bold" }} variant=''>
            {error}
          </TypoBold>
        )}
      </div>
    </div>
  );
}
