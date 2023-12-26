import { useState } from 'react';
import styles from './Slider.module.scss';

export const Slider = () => {
  const [slidesList, setSlidesList] = useState([{ id: 1 }, { id: 2 }]);
  const [slideIndex, setSlideIndex] = useState(0);

  const isLastSlide = slideIndex === slidesList.length - 1;
  const isFirstSlide = slideIndex === 0;

  const addSlide = () => {
    setSlidesList([...slidesList, { id: slidesList.length + 1 }]);
  };

  const deleteSlide = (slideId: number) => {
    const newSlidesList = slidesList.filter((s) => s.id !== slideId);
    setSlidesList(newSlidesList);

    if (isLastSlide) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const next = () => {
    if (!isLastSlide) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prev = () => {
    if (!isFirstSlide) {
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
          deleteSlide(slidesList[slideIndex].id);
        }}
      >
        Удалить слайд
      </button>
    </>
  );
};
