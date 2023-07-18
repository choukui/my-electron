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
