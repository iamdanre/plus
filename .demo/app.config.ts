// see all availabe configs here: https://github.com/viandwi24/nuxt3-awesome-starter/blob/v2/app.config.ts
export default defineAppConfig({
  awesome: {
    name: '+',
    description:
      '+.',
    author: {
      name: 'danre',
      links: {
        github: 'https://github.com/iamdanre',
        website: 'https://iamdanre,github.io,
      },
    },
    layout: {
      welcome: {
        // if false, in index page will show alert "create file "~/pages/index.vue" to replace this page"
        disableInfoReplaceIndexInWelcomePage: false,
      }
    },
    project: {
      links: {
        github: 'https://github.com/viandwi24/nuxt3-awesome-starter',
      },
    },
  },
})
