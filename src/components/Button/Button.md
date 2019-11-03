A very simple button.

```jsx
import Button from "./";

<div>
  <Button text="Hello World" />
  <Button
    primary
    text="Primary Button"
    onClick={() => {
      window.alert("Clicked!");
    }}
  />
</div>;
```
