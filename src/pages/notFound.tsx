import { Card, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <>
            <Container>
                <Card sx={{display:"flex",flexDirection:"column",gap:"20px",p:3,alignItems:"center",marginTop:"25%"}}>
                    <Typography variant='h3'>Got lost?</Typography>
                    <Link to='/'>Go back to home page</Link>
                </Card>
            </Container>
        </>
    )
}

export default NotFound