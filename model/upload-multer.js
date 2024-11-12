const multer = require("multer");
const appRoot = require("app-root-path");
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("Đây là app-root-path", appRoot.path +"/src/public/img_product");
        cb(null, appRoot.path+"/src/public/img_product");
    },
    filename: function (req, file, cb) {
      console.log("file upload",file)
        const uniqueSuffix = Date.now() ;
        cb(null,   uniqueSuffix + '-' + file.originalname  );
    }
});

const upload = multer({ storage: storage });
module.exports = upload;
