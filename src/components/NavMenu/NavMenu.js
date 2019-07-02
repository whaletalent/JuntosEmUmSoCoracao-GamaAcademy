import React, {Component, Fragment} from 'react'
import {Navbar, Container, Button} from 'rbx'
import Scroll from 'react-scroll-to-element'

export default class NavMenu extends Component{
    state={
        menuItems: [
            {label: 'Quem Somos', section: 'section1'},
            {label: 'Quero ser um voluntário', section: 'section2'},
            {label: 'Doações', section: 'section3'},
            {label: 'Seja um Patrocinador', section: 'section4'},
            {label: 'Galeria', section: 'section5'},
            {label: 'Contato', section: 'section6'},
        ]
    }
    render(){
        return(
            <Fragment>

                <Navbar>
                <Container>
                    <Navbar.Brand>
                    <Navbar.Item>
                        <img
                        src="https://www.qbrobotics.com/wp-content/uploads/2018/03/sample-logo.png"
                        alt="Logo"
                        />
                    </Navbar.Item>
                    <Navbar.Burger />
                    </Navbar.Brand>
                    <Navbar.Menu>
                    <Navbar.Segment align="end">
                        {
                            this.state.menuItems.map( item =>{
                                return(
                                    //usar 'active' na tag para marcar o item ativado do menu
                                    <Scroll type="id" element={item.section}>
                                        <Navbar.Item index={item.index} key={item.index}>
                                            {item.label}
                                        </Navbar.Item>
                                    </Scroll>
                                )
                            })
                        }
                        <Navbar.Item as="span">
                        <Button color="default-blue" inverted>
                            <span>Doar</span>
                        </Button>
                        </Navbar.Item>
                    </Navbar.Segment>
                    </Navbar.Menu>
                </Container>
                </Navbar>
            </Fragment>
        )
    }
}