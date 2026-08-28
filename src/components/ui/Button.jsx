import styled, { css } from 'styled-components';

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.onPrimary};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.onSecondary};
  `,
  accent: css`
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.onAccent};
  `,
  neutral: css`
    background-color: ${({ theme }) => theme.colors.neutral};
    color: ${({ theme }) => theme.colors.onNeutral};
  `,
};

const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.fonts.size.sm};
    box-shadow: ${({ theme }) => `${theme.shadow.sm} ${theme.colors.shadow}`};

    &:hover:not(:disabled) {
      box-shadow: ${({ theme }) => `1px 1px 0px ${theme.colors.shadow}`};
    }
    &:active:not(:disabled) {
      box-shadow: none;
    }
  `,
  md: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    font-size: ${({ theme }) => theme.fonts.size.md};
    box-shadow: ${({ theme }) => `${theme.shadow.md} ${theme.colors.shadow}`};

    &:hover:not(:disabled) {
      box-shadow: ${({ theme }) => `2px 2px 0px ${theme.colors.shadow}`};
    }
    &:active:not(:disabled) {
      box-shadow: none;
    }
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
    font-size: ${({ theme }) => theme.fonts.size.lg};
    box-shadow: ${({ theme }) => `${theme.shadow.lg} ${theme.colors.shadow}`};

    &:hover:not(:disabled) {
      box-shadow: ${({ theme }) => `4px 4px 0px ${theme.colors.shadow}`};
    }
    &:active:not(:disabled) {
      box-shadow: none;
    }
  `,
};

const translateOnPress = {
  sm: css`
    &:hover:not(:disabled) { transform: translate(1px, 1px); }
    &:active:not(:disabled) { transform: translate(2px, 2px); }
  `,
  md: css`
    &:hover:not(:disabled) { transform: translate(2px, 2px); }
    &:active:not(:disabled) { transform: translate(4px, 4px); }
  `,
  lg: css`
    &:hover:not(:disabled) { transform: translate(4px, 4px); }
    &:active:not(:disabled) { transform: translate(8px, 8px); }
  `,
};

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};

  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 0;
  cursor: pointer;

  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  ${(props) => variantStyles[props.$variant] || variantStyles.primary}
  ${(props) => sizeStyles[props.$size] || sizeStyles.md}
  ${(props) => translateOnPress[props.$size] || translateOnPress.md}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
    pointer-events: none;
  }
`;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  type = 'button',
  disabled = false,
  onClick,
  ...rest
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}