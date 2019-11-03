A very simple button.

```jsx
import { ThemeProvider } from "styled-components";
import Button from "./";
import Theme from "../../theme";

<ThemeProvider theme={Theme}>
  <Button />
  <Button variant="secondary">Secondary Button</Button>
  <Button variant="primary">Primary Button</Button>
</ThemeProvider>

```
