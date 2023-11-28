import { render, screen } from '@testing-library/react';

import App from './App';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('should renders component', () => {
    const component = render(<App />)

    const heading = component.getByRole("heading", {
      name: "REACT"
    })
    expect(heading.textContent).toBe("REACT")
    /* expect(component).toBeDefined() */
  });
});