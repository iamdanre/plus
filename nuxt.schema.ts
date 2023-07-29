import { NuxtAwesomeAppConfig } from './app.config'
// TODO: make the logo gaaaay
export default defineNuxtSchema({
  appConfig: {
    awesome: {
      name: '+',
      description: 'one stop shop for all your kit.',
      project: {
        links: {
          github: 'https://github.com/viandwi24/nuxt3-awesome-starter',
        },
      },
      layout: {
        page: {
          navbar: {
            menus: [],
          },
        },
        footer: {
          year: 2023,
        },
        welcome: {
          title: 'one stop shop four all your kit.',
          disableInfoReplaceIndexInWelcomePage: true,
        },
      },
      author: {
        name: 'viandwi24',
        links: {
          github: 'https://github.com/viandwi24',
          medium: 'https://viandwi24.medium.com',
          website: 'https://viandwi24.site',
        },
      },
    } as NuxtAwesomeAppConfig,
  },
})
