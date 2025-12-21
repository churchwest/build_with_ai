import './Card.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Card Component
 * 
 * Container component for grouping related content.
 * Used for service cards, pricing plans, order status, etc.
 * 
 * @example
 * <Card variant="elevated" padding="lg">
 *   <h3>Dry Cleaning</h3>
 *   <p>Professional care for your garments</p>
 * </Card>
 */
export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
}: CardProps) {
  const classNames = [
    'card',
    `card--${variant}`,
    `card--padding-${padding}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}
