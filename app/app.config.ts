import { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
  awesome: {
    name: 'plus',
    description: 'all your kit.',
    project: {
      links: {
        github: 'https://iamdanre.github.io',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [
            { type: 'link', title: 'Products', to: { name: 'products' } },
            { type: 'link', title: 'Post', to: { name: 'post' } },
            { type: 'link', title: 'Test', to: { name: 'test' } },
            {
              type: 'dropdown',
              title: 'documentations',
              children: [
                {
                  type: 'link',
                  title: 'components',
                  to: { name: 'docs-components' },
                },
              ],
            },
            { type: 'button', title: 'settings', to: { name: 'setting' } },
            // dynamic title
            // {
            //   type: 'button',
            //   title: (nuxt) =>
            //     (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            //   to: (nuxt) => (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            // },
          ],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'one stop for all your kit.',
        disableInfoReplaceIndexInWelcomePage: true,
      },
    },
    author: {
      name: 'danré',
      links: {
        github: 'https://github.com/iamdanre',
        website: 'https://iamdanre.github.io',
      },
    },
  },
})
