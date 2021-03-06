import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';

const HeroWrapper = styled.section`
background:url('${props => props.backgroundImage}');
background-size: cover;
background-repeat:no-repeat;
height:cacl(100vh - 66px);
display:flex;
align-items: center;
text-align:center;
color:white;
div {
    max-width:800px;
    margin: 0 auto;
    background: rbga(0,0,0,0.5);
}
`

const Hero = ({ title, content, backgroundImage }) => {

    return (
       <HeroWrapper backgroundImage={backgroundImage}>
            <div>
                <RichText render={title} />
            <p>
                {content}
            </p>
            </div>
       </HeroWrapper>
    );
}

export default Hero;