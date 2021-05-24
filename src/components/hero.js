import React from 'react';
import { RichText } from 'prismic-reactjs';

const Hero = ({ title, content }) => {
    console.log(title, content);
    return (
       <div>
            <RichText render={title} />
            <p>
                {content}
            </p>
       </div>
    );
}

export default Hero;