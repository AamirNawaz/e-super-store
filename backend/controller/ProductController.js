var { ProductModel } = require('../models/ProductModel');
var multer = require('multer');

/*******************Product Image uploading Code ******************/
const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};
//profile storing path
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/productImages");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage, fileFilter: imageFilter }).single('productImage');
/*******************Product Image uploading Code ******************/



const getProducts = async (req, res) => {
  try {
    // const products = await ProductModel.find({}).populate('category', 'name').exec();
    const products = await ProductModel.find({}).populate('category').exec();
    res.json({ products });
  } catch (error) {
    throw new Error('products not found');
  }
}

const getProductById = async (req, res) => {
  try {
    const product = await ProductModel.findById({ _id: req.params.id });
    res.json({ product });
  } catch (error) {
    throw new Error('Single Product not found', error);
  }
}


const addProduct = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.json({
          status: 500,
          message: err,
        });
      } else if (err) {
        return res.json({
          status: 500,
          message: err,
        });
      }

      const reqBody = req.body;
      const products = new ProductModel({
        productName: reqBody.productName,
        manufacturer: reqBody.manufacturer,
        details: reqBody.details,
        category: reqBody.category,
        image: req.file.filename,
        price: reqBody.price,
        sale: reqBody.sale,
        stock: reqBody.stock,
        status: reqBody.status,
        size: reqBody.size,
        qty: reqBody.qty,
        deliveryTime: reqBody.deliveryTime,
        guarantee: reqBody.guarantee,
        reviews: reqBody.reviews,
      });

      const result = await products.save();
      res.json({ result });

    });
  } catch (error) {
    res.status(400).send(error.message);
  }

}

const addProductUrl = async (req, res) => {
  try {
    const reqBody = req.body;
    const products = new ProductModel({
      productName: reqBody.productName,
      manufacturer: reqBody.manufacturer,
      details: reqBody.details,
      category: reqBody.category,
      image: reqBody.image,
      price: reqBody.price,
      sale: reqBody.sale,
      stock: reqBody.stock,
      status: reqBody.status,
      size: reqBody.size,
      qty: reqBody.qty,
      deliveryTime: reqBody.deliveryTime,
      guarantee: reqBody.guarantee,
      reviews: reqBody.reviews,
    });

    const result = await products.save();
    res.json({ result })
  } catch (error) {
    res.status(400).send(error.message);
  }
}


const deleteProduct = async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await ProductModel.deleteOne({ _id });
    res.json({ result });
  } catch (error) {
    console.log(error);
  }
}



module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  addProductUrl
};
