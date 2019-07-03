import React, {Component, Fragment} from 'react'
import {Hero, Container, Title } from 'rbx'
import NavMenu from '../NavMenu/NavMenu'
import './heroSection.scss'

export default class HeroSection extends Component{
    render(){
        return(
            <Fragment>
                
                <Hero size="fullheight" color="default-blue" className="heroContainer"> 
                    {/* Hero head: will stick at the top */}
                    <Hero.Head>
                        <NavMenu/>
                    </Hero.Head>
                    {/* Hero content: will be in the middle */}
                    <Hero.Body>
                    <Container textAlign="centered">
                        <Title as="h1">Apoie Nossa Causa</Title>
                        {/* <Title as="h2" subtitle>
                        Subtitle
                        </Title> */}
                    </Container>
                    </Hero.Body>
                
                    {/* Hero footer: Inserir caso haja necessidade */}
                    {/* <Hero.Foot>
                    <Container>
                        <Tab.Group as="nav" type="boxed" fullwidth>
                        <Tab active>Seja um Voluntário</Tab>
                        <Tab>Doações</Tab>
                        <Tab>Seja um patrocinador</Tab>
                        <Tab>Disk Help</Tab>
                        <Tab>Ações Voluntárias</Tab>
                        <Tab>Galeria</Tab>
                        <Tab>Contato</Tab>
                        </Tab.Group>
                    </Container>
                    </Hero.Foot> */}
                </Hero>
                
            </Fragment>
        )
    }
}