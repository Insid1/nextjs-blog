import styles from './alert.module.css';
import cn from 'classnames';
import React from "react";

interface IAlert {
  children: React.ReactNode,
  type: 'success' | 'error',
}


export default function Alert({children, type}: IAlert) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}