import './Typography.css';

interface HeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
}

interface TextProps {
  children: React.ReactNode;
  size?: 'sm' | 'base' | 'lg';
  color?: 'default' | 'muted' | 'primary' | 'accent';
  className?: string;
}

/**
 * Heading Component
 * 
 * Typography headings following the Figma type scale.
 * 
 * @example
 * <Heading as="h1">Mainstreet Cleaners</Heading>
 * <Heading as="h2">Our Services</Heading>
 * <Heading as="h3">Dry Cleaning</Heading>
 */
export function Heading({
  children,
  as: Tag = 'h2',
  className = '',
}: HeadingProps) {
  const classNames = ['heading', `heading--${Tag}`, className].filter(Boolean).join(' ');
  
  return (
    <Tag className={classNames}>
      {children}
    </Tag>
  );
}

/**
 * Text Component
 * 
 * Body text with various sizes and colors.
 * 
 * @example
 * <Text>Standard paragraph text</Text>
 * <Text size="lg" color="primary">Highlighted message</Text>
 * <Text size="sm" color="muted">Fine print</Text>
 */
export function Text({
  children,
  size = 'base',
  color = 'default',
  className = '',
}: TextProps) {
  const classNames = [
    'text',
    `text--${size}`,
    `text--${color}`,
    className,
  ].filter(Boolean).join(' ');
  
  return (
    <p className={classNames}>
      {children}
    </p>
  );
}
