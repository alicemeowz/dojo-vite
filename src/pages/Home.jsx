import React from 'react'
import { HomeContainer } from '../Styles/Styles'
import Expenses from '../components/Expenses'
import { ParticleBackground } from '../components/ParticleBackground'

const Home = () => {
    return (
        <>
            <ParticleBackground />
            <HomeContainer>
                <Expenses />
            </HomeContainer>
        </>
    )
}

export default Home