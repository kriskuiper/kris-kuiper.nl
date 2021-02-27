const path = require('path')
const { readdir } = require('fs').promises

const prefixFullFilePath = (fileName) => `/fonts/inter/${fileName}`

// Seems pretty naive but works in this case so fine by me
const getFileType = (fileName) => {
  const [_, fileType] = fileName.split('.')
  return fileType
}

module.exports = async () => {
  const relativePath = '../../assets/fonts/inter'
  const fontFiles = await readdir(path.join(__dirname, relativePath))

  return fontFiles.map((file) => ({
    path: prefixFullFilePath(file),
    type: getFileType(file)
  }))
}
