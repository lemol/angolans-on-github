
// ref: https://umijs.org/config/
export default {
  exportStatic: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: true,
      title: 'angolans-on-github-with-react-umi-apollo',
      hardSource: true,
      routes: {
        exclude: [
          /components/,
          /schema\.(js|jsx|ts|tsx)$/,
          /resolvers\.(js|jsx|ts|tsx)$/,
        ],
      },
    }],
    // ref: https://github.com/lemol/umi-plugin-apollo
    ['umi-plugin-apollo', {
      uri: 'https://api.github.com/graphql',
      noMock: true,
    }],
    // ref: https://github.com/lemol/umi-plugin-firebase
    ['umi-plugin-firebase', /* default = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    }*/],
  ],
}
