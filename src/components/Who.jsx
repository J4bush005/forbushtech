import React from 'react';
import { styled } from 'styled-components';
import Header from './Header';

 const Section = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 `

const Who = () => {
    return (
        <Section>
            <Header />
        </Section>
    );
}

export default Who;
