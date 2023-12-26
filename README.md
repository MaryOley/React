# React

# useState();

**useState()** создает переменную **state**, при изменении которой через **setState()** перерисовывается компонент, хранит в себе состояние компонента. 

Например:
- показывать/скрывать элемент
- текущий пункт меню, слайд 
- списки(слайдов)

```javascript
const [state, setState] = useState(false); // начальное состояние false

```
Меняем значение переменной через функию **setState**
```tsx
const [isOpen, setOpen] = useState(false);


return (
    <>
        <button onClick={() => setOpen(true)}>Показать что то</button>

        {isOpen && <div>Меня показали</div>}
    </div>
)

```
Но если в useState используются объекты или массивы

```tsx
const [slides, setSlides] = useState([]);

```
то в setSlides в качестве аргумента передаем **новый объект или массив**:

```tsx
const [slides, setSlides] = useState([]);

 <button onClick={() => {
    // правильно
    setSlides([...slides, {title: 'Новый слайд'}])

    // не правильно
    slides.push({title: 'Новый слайд'});
    setSlides(slides);

 }}>Добавить слайд</button>

  <button onClick={() => {
    // правильно
    const newSlides = slides.filter(s => s.id !== slide.id)

    setSlides(newSlides)
 }}>Удалить слайд</button>

```

# Как отрисовать повторяющиеся элементы (списки, слайды, карточки)

1. Должен быть массив с данными (создается через useState или передается в настройках компонента)
```javascript
const slides = [
    {id: 1, title: 'Слайд 1'}, 
    {id: 2, title: 'Слайд 2'},
];

const [slides, setSlides] = useState<{title: string}[]>([]);
```

2. Используем метод массивов **map**, обязательно задаем **key** у повоторяющегося элемента

```tsx
return (<div>
{slides.map((slide, index) => {
    return (
        <div key={index} onClick={() => {
            const newSlides = slides.filter(s => s.id !== slide.id);

            setSlides(newSlides);
        }}>{slide.title}</div>
    )
})}
</div>)

```
