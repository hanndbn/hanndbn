import React, {Component} from "react";
import {Image, HeroImage} from './Home.style';
import {Container} from '../../theme/grid';

class Home extends Component {
    render() {
        return (
            <Container>
                <HeroImage>
                    <h1>Han Nguyen Dinh</h1>
                    <h2>Front-end Developer</h2>
                </HeroImage>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </Container>
        );
    }
}

export default Home;
