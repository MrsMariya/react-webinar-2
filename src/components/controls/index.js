import React from 'react';
import propTypes from 'prop-types';
import './style.css';
import {cn as bem} from "@bem-react/classname";

function Controls({onOpenModal}){
  const cn = bem('Controls')
  return (
    <div className={cn()}>
      <p>В корзине:</p>
      <p className={cn('price')}>2 товара / 23 ₽</p>
      <button onClick={onOpenModal}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onAdd: propTypes.func.isRequired // Обяхательное свойство - функция
}

Controls.defaultProps = {
  onAdd: () => {} // Значение по умолчанию - функция-заглушка
}

export default React.memo(Controls);
