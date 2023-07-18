module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-dmg',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'choukui',
          name: 'my-electron'
        },
        authToken: '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',
        prerelease: false,
        draft: true
      }
    }
  ]
};
