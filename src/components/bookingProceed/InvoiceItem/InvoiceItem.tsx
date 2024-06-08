import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { LinkPath } from 'src/type';

import s from './InvoiceItem.module.scss';

interface InvoiceItemProps {
  caption?: string;
  info: string | ReactNode;
  link?: {
    name: string;
    to?: LinkPath;
    href?: string;
  };
}

const InvoiceItem: FC<InvoiceItemProps> = ({ caption, info, link }) => {
  return (
    <div className={s.line}>
      {caption ? <div className={s.line__caption}>{caption}</div> : null}
      <div className={s.line__wr}>
        <span className={s.line__info}>{info}</span>
        {link ? (
          link.to ? (
            <Link to={link.to} className={s.line__link}>
              {link.name}
            </Link>
          ) : link.href ? (
            <a href={link.href} className={s.line__link} target="_blank">
              {link.name}
            </a>
          ) : null
        ) : null}
      </div>
    </div>
  );
};

export default InvoiceItem;
