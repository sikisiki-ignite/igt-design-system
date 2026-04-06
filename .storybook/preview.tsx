/// <reference types="vite/client" />
import type { Preview } from '@storybook/react-vite'
import '../src/tokens/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#121212' },
      ],
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
      },
    },
    radius: {
      name: 'Radius',
      description: 'Border radius variant',
      defaultValue: 'soft',
      toolbar: {
        icon: 'component',
        items: ['formal', 'neutral', 'soft', 'friendly', 'playful'],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals['theme'] ?? 'light'
      const radius = context.globals['radius'] ?? 'soft'
      document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : '')
      document.documentElement.setAttribute('data-radius', radius)
      return Story()
    },
  ],
}

export default preview
