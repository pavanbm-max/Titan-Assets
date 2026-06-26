import type { CSSProperties } from 'react';

const ICON_PATHS = {
  'arrow-path': '/icons/arrow-path.svg',
  'arrow-trending-up': '/icons/arrow-trending-up.svg',
  'chart-pie': '/icons/chart-pie.svg',
  'chevron-down': '/icons/chevron-down.svg',
  'chevron-right': '/icons/chevron-right.svg',
  'cog-8-tooth': '/icons/cog-8-tooth.svg',
  'cube-16-solid': '/icons/cube-16-solid.svg',
  link: '/icons/link.svg',
  'link-solid': '/icons/link-solid.svg',
  search: '/icons/search.svg',
  'x-mark': '/icons/x-mark.svg',
} as const;

type ProductIconName = keyof typeof ICON_PATHS;

type ProductIconProps = {
  name: ProductIconName;
  className?: string;
  title?: string;
};

export function ProductIcon({ name, className = 'h-4 w-4', title }: ProductIconProps) {
  const url = ICON_PATHS[name];
  const style = {
    mask: `url("${url}") center / contain no-repeat`,
    WebkitMask: `url("${url}") center / contain no-repeat`,
  } satisfies CSSProperties;

  return (
    <span
      aria-hidden={title ? undefined : true}
      aria-label={title}
      role={title ? 'img' : undefined}
      className={`inline-block shrink-0 bg-current ${className}`}
      style={style}
    />
  );
}
