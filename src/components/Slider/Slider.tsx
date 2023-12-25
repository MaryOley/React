import { useState } from 'react';
import styles from './Slider.module.scss';

export const Slider = () => {
  const [slidesList, setSlidesList] = useState([{ id: 1 }, { id: 2 }]);

  const [slideIndex, setSlideIndex] = useState(0);

  const addSlide = () => {
    setSlidesList([...slidesList, { id: slidesList.length + 1 }]);
  };
  const deliteSlide = (slideId: number) => {
    const newSlidesList = slidesList.filter((s) => s.id !== slideId);
    setSlidesList(newSlidesList);
    // if (slideIndex === slidesList.length - 1) {
    // }
  };
  const next = () => {
    if (slideIndex !== slidesList.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };
  const prev = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    }
  };
  return (
    <>
      <button
        onClick={() => {
          addSlide();
        }}
      >
        Добавить слайд
      </button>
      <div className={styles.container}>
        <div className={styles.slider} style={{ marginLeft: `${slideIndex * -100}px` }}>
          {slidesList.map((slide, index) => {
            return (
              <div className={styles.slide} key={index}>
                {slide.id}
              </div>
            );
          })}
        </div>
      </div>
      <button className={styles.prev} onClick={() => prev()}>
        Назад
      </button>
      <button className={styles.next} onClick={() => next()}>
        Вперед
      </button>
      <button
        className={styles.delete}
        onClick={() => {
          deliteSlide(slidesList[slideIndex].id);
        }}
      >
        Удалить слайд
      </button>
    </>
  );
};
