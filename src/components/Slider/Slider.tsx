import { useState } from 'react';
import styles from './Slider.module.scss';
import { Slide } from './Slide/Slide';
import { Marker } from './Marker/Marker';

export const Slider = () => {
  const [slidesList, setSlidesList] = useState([{ id: 1 }, { id: 2 }]);
  const [slideIndex, setSlideIndex] = useState(0);

  const isLastSlide = slideIndex === slidesList.length - 1;
  const isFirstSlide = slideIndex === 0;

  const addSlide = () => {
    setSlidesList([...slidesList, { id: slidesList.length + 1 }]);
  };

  const deleteSlide = () => {
    const newSlidesList = slidesList.filter((s, index) => index !== slideIndex);
    setSlidesList(newSlidesList);

    if (isLastSlide) {
      setSlideIndex(slideIndex - 1);
    }
    console.log(newSlidesList);
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
      <button onClick={() => addSlide()}>Добавить слайд</button>

      <div className={styles.container}>
        <div className={styles.slider} style={{ marginLeft: `${slideIndex * -600}px` }}>
          {slidesList.map((slide, index) => {
            return (
              <Slide key={index} isActive={index === slideIndex}>
                {slide.id}
              </Slide>
            );
          })}
        </div>
      </div>
      <div className={styles.markerBox}>
        {slidesList.map((slide, index) => {
          return <Marker key={index} isActive={index === slideIndex}></Marker>;
        })}
      </div>

      <button className={styles.prev} onClick={() => prev()}>
        Назад
      </button>
      <button className={styles.next} onClick={() => next()}>
        Вперед
      </button>
      <button className={styles.delete} onClick={() => deleteSlide()}>
        Удалить слайд
      </button>
    </>
  );
};
