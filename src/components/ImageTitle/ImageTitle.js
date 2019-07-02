import React, {Component, Fragment} from 'react'
import {Hero, Container, Title} from 'rbx'

export default class ImageTitle extends Component{
    image ={
        backgroundImage: `url(${this.props.image})`,
        backgroundSize: 'cover'
    }
    render(){
        return(
            <Fragment>
                <Hero size="medium"
                    id={this.props.index}
                    style={this.image}
                >
                    <Hero.Body>
                    <Container>
                        <Title>{this.props.title}</Title>
                        <Title  subtitle>
                            {this.props.subtitle}
                        </Title>
                    </Container>
                    </Hero.Body>
                </Hero>
                {this.props.children}
            </Fragment>
        )
    }
}