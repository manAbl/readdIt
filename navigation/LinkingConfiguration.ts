export default {
  prefixes: ['/'],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'Home',
            },
          },
          Details: {
            screens: {
              Details: 'Details',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
