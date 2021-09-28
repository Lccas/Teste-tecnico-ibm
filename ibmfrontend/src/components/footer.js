import React from 'react';
import { Container } from '@material-ui/core';
import '../styles/footer.css';

export default function Footer(){ 
    return (
        <Container className="Footer-container">
            <footer className="Footer-content">
                <span className="Footer-span"> Desenvolvido por Leonardo Carvalho - 2021 </span>
            </footer>
        </Container>
    );
}