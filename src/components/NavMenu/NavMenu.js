import React, {Component, Fragment} from 'react'
import {Navbar, Container, Button} from 'rbx'

export default class NavMenu extends Component{
    state={
        menuItems: [
            'Quero ser um voluntário',
            'Seja um patrocinador',
            'Disk Help',
            'Ações Voluntárias',
            'Galeria',
            'Contato',
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
                                    <Navbar.Item index={item.index} key={item.index}>
                                        {item}
                                    </Navbar.Item>
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
