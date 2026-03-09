import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
    variant?: 'primary' | 'success' | 'secondary' | 'info' | 'warning' | 'danger',
    title?: string,
    className?: string,
    disabled?: boolean,
    onPress?: () => void
}

const variants = {
    primary: {
        button: "bg-primary-600",
        text: "text-primary-50"
    },
    success: {
        button: "bg-success-600",
        text: "text-success-50"
    },
    secondary: {
        button: "bg-secondary-600",
        text: "text-secondary-50"
    },
    info: {
        button: "bg-info-600",
        text: "text-info-50"
    },
    warning: {
        button: "bg-warning-600",
        text: "text-warning-50"
    },
    danger: {
        button: "bg-danger-600",
        text: "text-danger-50"
    }
};

export default function Button({
    variant = 'primary',
    title = '',
    className = '',
    disabled = false,
    onPress
}: ButtonProps) {
    const selectedVariant = variants[variant] || variants.primary;

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            activeOpacity={0.7}
            className={`${selectedVariant.button} p-4 flex justify-center rounded-xl ${disabled ? 'opacity-50' : ''} ${className}`}
        >
            <Text className={`text-center font-semibold ${selectedVariant.text}`}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
