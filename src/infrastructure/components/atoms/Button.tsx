import React from 'react';

type Props = {
    onClick: () => void;
    title: string;
};

function Button({ onClick, title }: Props) {
    return <button onClick={onClick}>{title}</button>;
}

export default Button;
