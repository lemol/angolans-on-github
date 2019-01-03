
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: true,
      title: 'react-umi-apollo',
      dll: true,
      hardSource: true,
      routes: {
        exclude: [
          /components/,
          /schema\.(js|jsx|ts|tsx)$/,
          /resolvers\.(js|jsx|ts|tsx)$/,
        ],
      },
    }],
    ['umi-plugin-apollo', {
      uri: 'https://api.github.com/graphql',
      noMock: true,
    }],
  ],
}
