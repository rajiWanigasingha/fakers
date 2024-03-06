import { Container } from "@mui/material"
import Allfaker from "../components/allFakers/allFakers"
import Navbar from "../components/navbar/navbar"
import { lazy } from "react"

const Wantfakers = lazy(() => import('../components/wantFakers/wantFakers'))

function CreatePage() {
    return (
        <>
            <Navbar></Navbar>
            <Container sx={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"30px", p:3}}>
            <Allfaker></Allfaker>
            <Wantfakers></Wantfakers>
            </Container>
        </>
    )
}

export default CreatePage