import Link from 'next/link';
import GithubIcon from '@/lib/svg/github.svg';

const ICONS = {
  github: GithubIcon,
};

type Props = {
  kind: keyof typeof ICONS;
  href: string;
  className?: string;
  size?: number;
  onClick?: () => void;
};

export default function IconButton({ kind, href, size = 6, onClick, className }: Props) {
  const SocialSvg = ICONS[kind];
  return (
    <Link className={className} target='_blank' rel='noopener noreferrer' href={href} onClick={onClick}>
      <span className='sr-only'>{kind}</span>
      <SocialSvg width={size * 4} height={size * 4} className='fill-current' />
    </Link>
  );
}
