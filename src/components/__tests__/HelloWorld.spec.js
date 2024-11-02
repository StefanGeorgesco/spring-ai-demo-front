import { describe, it, expect, beforeEach } from 'vitest';

import { mount } from '@vue/test-utils';
import ViewHome from '@/views/ViewAnalystChat.vue';
import { createApp } from 'vue';
import App from '@/App.vue';
import { createPinia } from 'pinia';

describe('HelloWorld', () => {
  beforeEach(() => {
    const app = createApp(App);
    app.use(createPinia());
  });

  it('renders properly', () => {
    const wrapper = mount(ViewHome);
    expect(wrapper.text()).toContain('Posez-moi votre question');
  });
});
