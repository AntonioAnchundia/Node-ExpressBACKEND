const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const pathStorage = `${__dirname}/../storage`;
      cb(null, pathStorage);
    },
    filename: function (req, file, cb) {
      const ext = file.originalname.split('.').pop()
      const filename = `file-${Date.now()}.${ext}`
      cb(null, filename);
    },
  });

const uploadMidlleware = multer({storage}); // o storage"propiedad" : propiedad "se asgina la funcion storage de arriba" 

module.exports = uploadMidlleware ;