const classify = () => (import('views/classify/classify.vue'))
export default {
  path: '/classify',
  component: classify,
  name: 'classify',
  props: true,
  children: [
    {
      path: ':pageName?',
      name: 'sections',
      component: () => (import('views/classify/sections/sections.vue'))
    }
  ]
}
