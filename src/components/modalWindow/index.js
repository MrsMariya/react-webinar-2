import React from 'react';
import {cn as bem} from '@bem-react/classname';
import './style.css';
import List from '../list';

const ModalWindow = () => {
  const cn = bem('Modal');
  return (
    <div className={cn()}>
      <div className={cn('wrapper')}>
        <header className={cn('header')}>
          <h1>Корзина</h1>
          <button>Закрыть</button>
        </header>
        <main>
          <List />
        </main>
      </div>
    </div>
  )
}

export default ModalWindow;
