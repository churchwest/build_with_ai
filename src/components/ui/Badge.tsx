import './Badge.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'neutral';
  size?: 'sm' | 'md';
}

/**
 * Badge Component
 * 
 * Small status indicators and labels.
 * Used for order status, service tags, promotions, etc.
 * 
 * @example
 * <Badge variant="success">Ready for Pickup</Badge>
 * <Badge variant="accent">New</Badge>
 * <Badge variant="secondary">Premium</Badge>
 */
export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
}: BadgeProps) {
  const classNames = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`,
  ].join(' ');

  return (
    <span className={classNames}>
      {children}
    </span>
  );
}
