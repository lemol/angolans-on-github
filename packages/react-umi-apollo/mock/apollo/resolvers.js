const nodes = [
  {
    avatarUrl: 'https://gravatar.com/lemol',
    name: 'Leza',
    login: 'lemol',
    __typename: 'User'
  },
  {
    avatarUrl: 'https://gravatar.com/lemol2',
    name: 'Frida',
    login: 'frida',
    __typename: 'User'
  }
];

export default {
  Query: {
    search() {
      return {
        nodes: [
          {
            avatarUrl: 'https://picsum.photos/300/300/?random',
            name: 'Leza',
            login: 'lemol',
            __typename: 'User'
          },
          {
            avatarUrl: 'https://picsum.photos/300/300/?random',
            name: 'Frida',
            login: 'frida',
            __typename: 'User'
          },
          {
            avatarUrl: 'https://picsum.photos/300/300/?random',
            name: 'Mercy',
            login: 'mercy',
            __typename: 'User'
          }
        ]
      };
    }
  }
}