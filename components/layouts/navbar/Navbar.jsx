import { Box, Typography, styled } from '@mui/material'
// COMMON
import { ModalCart } from '../../common'
// NEXT
import Link from 'next/link'
// ICONS
import { AiOutlineSearch } from 'react-icons/ai'
const sizeIcon = 40

////////////////////// EXPORT FUNCTION //////////////////////
export default function Navbar() {
  ////////////////////// STYLES //////////////////////
  const RootNavbar = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    background: 'rgb(229 231 235)',
    display: 'flex',
    justifyContent: 'space-between',
    padding: ' 24px 32px',
    [theme.breakpoints.down('sm')]: {}
  }))

  const stylesLink= {
    textDecoration: 'none',
  }

    const TypoHome = styled(Typography)(({ theme }) => ({
      color: "#776EF9",
      fontWeight: "bold",
    }));

  const BoxSearchAndCart = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    display: 'flex',
    gap: '16px'
  }))

  const BoxCart = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    padding: '8px'
  }))
  
  ////////////////////// RETURN //////////////////////
  return (
    <RootNavbar>
      <Link href='/' style={stylesLink}>
        <TypoHome variant='h4'>ACCUEIL</TypoHome>
      </Link>
      <BoxSearchAndCart>
        <AiOutlineSearch
          onClick={() => setOpen((open) => !open)}
          size={sizeIcon}
        />
        <BoxCart>
          <ModalCart />
        </BoxCart>
      </BoxSearchAndCart>
    </RootNavbar>
  );
}
