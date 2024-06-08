import { Link, LinkProps } from 'react-router-dom';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';

import s from './Button.module.scss';

interface ButtonBaseProps {
  mods: string[];
}

interface ButtonElementProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonBaseProps {
  type?: 'button' | 'submit' | 'reset';
}

interface AnchorElementProps extends AnchorHTMLAttributes<HTMLAnchorElement>, ButtonBaseProps {}

interface LinkElementProps extends LinkProps, ButtonBaseProps {}

type ButtonProps = ButtonElementProps | AnchorElementProps | LinkElementProps;

const Button: FC<ButtonProps> = ({ mods, children, ...restProps }) => {
  const classNames = [s.btn, ...mods.map(mod => s[`btn--${mod}`])].join(' ');

  if ('href' in restProps) {
    const { href, ...anchorProps } = restProps as AnchorElementProps;
    return (
      <a href={href} className={classNames} {...anchorProps}>
        {children}
      </a>
    );
  }

  if ('to' in restProps) {
    const { to, ...linkProps } = restProps as LinkElementProps;
    return (
      <Link to={to} className={classNames} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = restProps as ButtonElementProps;
  return (
    <button type={buttonProps.type ?? 'button'} className={classNames} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
