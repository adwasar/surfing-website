import { useEffect, RefObject } from 'react';

type RefType = RefObject<HTMLElement> | RefObject<HTMLElement>[];

export const useClickOutside = (isActive: boolean, refs: RefType | null, callback: () => void) => {
  const handleClickOutside = (event: MouseEvent) => {
    const isOutside = (ref: RefObject<HTMLElement>) =>
      ref.current &&
      document.body.contains(ref.current) &&
      !ref.current.contains(event.target as Node);

    if (Array.isArray(refs)) {
      if (isActive && refs.every(ref => ref && ref.current && isOutside(ref))) {
        callback();
      }
    } else {
      if (isActive && refs && refs.current && isOutside(refs)) {
        callback();
      }
    }
  };

  useEffect(() => {
    const options: AddEventListenerOptions | boolean = { passive: true };
    document.addEventListener('mousedown', handleClickOutside, options);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, options);
    };
    //eslint-disable-next-line
  }, [isActive, refs, callback]);
};
