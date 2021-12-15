import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '..', '..', '..', 'uploads'));
  },
  filename: (req, file, cb) => {
    if (req.url === '/create') {
      const extension = file.mimetype.split('/')[1];
      cb(null, `${file.fieldname}.${extension}`);
    } else {
      const name = req.url.split('/')[2];
      const extension = file.mimetype.split('/')[1];
      const fileName = `${name}.${file.fieldname}.${extension}`;
      cb(null, fileName);
    }
  },
});

const multerUpload = multer({ storage }).fields([{ name: 'gameHero' }, { name: 'gameThumb' }]);

export default multerUpload;
