import styles from './button.module.css';

interface ButtonProps {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

export const Button = ({
    primary = false,
    size = 'medium',
    label,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (
        <button
            type='button'
            className={[
                styles['button'],
                styles[`button--${size}`],
                styles[mode]
            ].join(' ')}
            {...props}
        >
            {label}
        </button>
    );
};
