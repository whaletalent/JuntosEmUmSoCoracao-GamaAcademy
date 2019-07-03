import React, {Component, Fragment} from 'react'
import {Hero, Container, Title} from 'rbx'
import './ImageTitle.scss'

export default class ImageTitle extends Component{
    image ={
        backgroundImage: `url(${this.props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    render(){
        return(
            <Fragment>
                <Hero size="medium" className="responsiveImage"
                    id={this.props.index}
                    style={this.image}
                    color="default-blue"
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