import { Box, Typography, styled } from '@mui/material'


////////////////////// EXPORT FUNCTION //////////////////////
export default function Footer() {
  ////////////////////// STYLES //////////////////////
  const RootFooter = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    background: 'rgb(229 231 235)',
    // bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    padding: ' 24px 32px',
    position: 'absolute',
    width: '100vw',
    [theme.breakpoints.down('sm')]: {}
  }))

  const TypoFooter = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
  }))

  return (
    <RootFooter>
      <TypoFooter align='center' variant='h4'>Footer</TypoFooter>
    </RootFooter>
  )
}
