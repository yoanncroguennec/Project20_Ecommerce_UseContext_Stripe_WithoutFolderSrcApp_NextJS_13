import React, { useState } from "react";
import { Box, Button, Typography, styled, Modal } from "@mui/material";
// NEXT
import Image from "next/image";
// COMMONS
import { FooterModalCart } from "..";
// UTILS CONTEXTS
import { useCart } from "../../../utils/contexts";
// ICONS
import { AiOutlineShopping } from "react-icons/ai";
import { formatCurrency } from "@/utils/functions/utils";
const sizeIcon = 40;

////////////////////// EXPORT FUNCTION //////////////////////
export default function ModalCart() {
  ////////////////////// STYLES //////////////////////
  const RootModalCart = styled(Box)(({ theme }) => ({
    background: "#FFF",
    border: "2px solid #000",
    boxShadow: 24,
    left: "50%",
    padding: 4,
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    [theme.breakpoints.down("sm")]: {},
  }));

  const BoxListItems = styled(Box)(({ theme }) => ({
    maxHeight: "400px",
    overflow: "scroll",
  }));

  const BoxContentListItems = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "nowrap",
    padding: "15px 10px",
  }));

  const stylesIMG = {
    borderRadius: "15px",
    boxShadow: "rgba(0, 0, 0, 0.36) 0px 22px 70px 4px",
    height: "100px",
    width: "100px",
  };

  const BoxInfoItem = styled(Box)(({ theme }) => ({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginLeft: "16px",
  }));

  const BoxTitleDesc = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
  }));

  const BoxQtyAndDelete = styled(Box)(({ theme }) => ({
    alignItems: "flex-end",
    display: "flex",
    flex: "1 1 0%",
    justifyContent: "space-between",
  }));

  ////////////////////// JS //////////////////////
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { items, removeItem } = useCart();

  ////////////////////// RETURN //////////////////////
  return (
    <div>
      <Button onClick={handleOpen}>
        <AiOutlineShopping size={sizeIcon} />
        <Typography variant=''>( {items.length} ) articles.</Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <RootModalCart>
          <BoxListItems>
          
            {items.map((price) => (
              <BoxContentListItems key={price.id}>
                <Image
                  alt={price.product.description}
                  height={550}
                  src={price.product.images[0]}
                  style={stylesIMG}
                  width={550}
                />
                <BoxInfoItem>
                  <div>
                    <BoxTitleDesc>
                      <Typography variant=''>{price.product.name}</Typography>
                      <Typography variant='h6'>
                        {formatCurrency(price.unit_amount)}
                        {/* {(price.unit_amount / 100).toLocaleString("en-FR", {
                          style: "currency",
                          currency: "EUR",
                        })} */}
                      </Typography>
                    </BoxTitleDesc>
                    <Typography variant=''>
                      {price.product.description}
                    </Typography>
                  </div>
                  <BoxQtyAndDelete>
                    <Typography variant=''>Qty 1</Typography>
                    <Button
                      color='error'
                      onClick={() => removeItem(price.id)}
                      style={{ fontWeight: "bold" }}
                      variant='outlined'
                    >
                      Supprimer
                    </Button>
                  </BoxQtyAndDelete>
                </BoxInfoItem>
              </BoxContentListItems>
            ))}
          </BoxListItems>
          <FooterModalCart handleClose={handleClose} items={items} />
        </RootModalCart>
      </Modal>
    </div>
  );
}
