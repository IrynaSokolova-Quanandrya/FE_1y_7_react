- Нормалізація стилів:
  - [PostCSS Normalize](https://create-react-app.dev/docs/adding-css-reset)
  - [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- Ванільний CSS і препроцессори
- Інлайн стилі
- CSS-модулі
  - Композиція з `composes`
  - Змінні
- CSS in JS
- Про бібліотеки компонентів

## ColorPicker

```html
<div>
  <h2>Color Picker</h2>
  <div>
    <span></span>
  </div>
</div>
```

```js
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
```

## Alert

Властивість 'type' може бути лише 'error' 'success' або 'warning'

```html
<p className="alert"></p>
```
