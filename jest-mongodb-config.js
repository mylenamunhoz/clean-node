module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '4.0.3', // Se for um projeto de prod é bom conferir o banco de produção e verificar se estar na mesma versão
      skipMD5: true
    },
    autoStart: false
  }
}
