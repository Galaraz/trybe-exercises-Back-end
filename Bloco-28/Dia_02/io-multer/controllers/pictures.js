const path = require('path');
const fs = require('fs').promises;
const {
  memoryUpload,
  // originalNameUpload,
} = require('../middlewares/upload');

const uploadPicture = [
  // originalNameUpload.single('file'),
  memoryUpload.single('file'),
  async (req, res) => {
    const { username, caption } = req.body;

    if (!username || !caption) {
      return res.status(422).json({ message: 'Missing username or caption' });
    }

    const { file: { buffer, ...file } } = req;

    const filePath = path.join(__dirname, '..', 'uploads', file.originalname);

    await fs.writeFile(filePath, buffer);

    res.status(200).json({
      message: 'Upload realizado com sucesso',
      picture: {
        username,
        caption,
        file,
        filePath,
      },
    });
  },
];

module.exports = {
  uploadPicture,
};