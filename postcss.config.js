module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      propList: [
        '*',
        '!border-left',
        '!border-right',
        '!border-top',
        '!border-bottom',
        '!border',
        '!outline',
      ],
      selectorBlackList: [],
    },
  },
};
