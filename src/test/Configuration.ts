export default () => ({
  logLevel: 'info',
  port: parseInt(process.env.PORT),
  baseUrl: process.env.BASE_URL,
  static: {
    servePath: '/static',
    dir: process.env.STATIC_DIR,
  },
});
