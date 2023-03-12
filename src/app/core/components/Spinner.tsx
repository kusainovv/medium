import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

const spinner = keyframes`
    0% {
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
        transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
`;

const SpinnerWrapper = styled.div`
    animation: 1.5s linear infinite ${spinner};
    animation-play-state: inherit;
    border: solid 5px #ffffff;
    border-bottom-color: #000000;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
`;

export const Spinner = () => <SpinnerWrapper />;
