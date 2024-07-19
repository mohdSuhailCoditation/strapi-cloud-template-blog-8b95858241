module.exports = {
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      introspection: true,
      depthLimit: 7,
      amountLimit: 100,
    },
  },
};
