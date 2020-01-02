module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Career Switch - RemotePETGA', // Navigation and Site Title
  titleAlt: 'RemotePETGA', // Title for JSONLD
  description: 'Un espace de partage pour le changement de carrière de gestionnaire de stocks à remote developer.',
  headline: 'Writing and publishing content for LekoArts', // Headline for schema.org JSONLD
  url: 'https://prismic.lekoarts.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Prismic', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Duverger PETGA', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@epegase', // Twitter Username
  facebook: 'epegase', // Facebook Site Name
  googleAnalyticsID: 'UA-47519312-7',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
