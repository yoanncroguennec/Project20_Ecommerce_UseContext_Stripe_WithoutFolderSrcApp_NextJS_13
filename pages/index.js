import { useState } from "react";
import Stripe from "stripe";
import {
  Box,
  Button,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// COMMON
import { ProductDetails } from "../components/common";

////////////////////// EXPORT FUNCTION //////////////////////
export default function HomePage({
  prices: { data = [], has_more },
  // paymentIntents
}) {
  // console.log(paymentIntents)
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  ////////////////////// STYLES //////////////////////
  const RootHomePage = styled(Box)(({ theme }) => ({
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "64px 16px",
    [theme.breakpoints.down("sm")]: {},
  }));

  const TypoTitlePage = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
  }));

  const BoxListProducts = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    marginTop: "32px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
  }));

  const BtnSeeMore = styled(Button)(({ theme }) => ({
    background: "rgb(224 242 254)",
    borderRadius: "6px",
    marginTop: "40px",
    padding: "8px 32px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {},
  }));

  ////////////////////// JS //////////////////////
  const [products, setProducts] = useState(data);
  const [hasMore, setHasMore] = useState(has_more);

  const lastProductId = products[products.length - 1]?.id;

  const loadMore = async () => {
    if (!hasMore || !lastProductId) return;

    try {
      const { prices } = await fetch(
        `/api/stripe/prices?starting_after=${lastProductId}`
      ).then((res) => res.json());
      if (prices.data) {
        setProducts((products) => [...products, ...prices.data]);
        setHasMore(prices.has_more);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RootHomePage>
      <TypoTitlePage align='center' variant={matches ? "h5" : "h3"}>
        Liste des Pizzas :
      </TypoTitlePage>

      <BoxListProducts>
        {products.map((price) => (
          <ProductDetails key={price.id} price={price} />
        ))}
      </BoxListProducts>

      <BtnSeeMore onClick={loadMore} disabled={!hasMore} variant='outlined'>
        Voir plus ....
      </BtnSeeMore>
    </RootHomePage>
  );
}

export async function getServerSideProps() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const prices = await stripe.prices.list({
    active: true,
    limit: 4,
    expand: ["data.product"],
  });

  // const paymentIntents = await stripe.paymentIntents.list({
  //   limit: 3
  // })

  return {
    props: {
      prices,
      // paymentIntents
    },
  };
}
