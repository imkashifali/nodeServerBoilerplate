var Products = require('../models/Products')


exports.getProducts = async function (query) {
    try {
        const Product = await Products.find(query);
        return Product;
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating Products')
    }
}

exports.getSingleProduct = async function (query) {
    try {
        const productSearch = await Products.findById(query);
        return productSearch;
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating Product')
    }
}

exports.saveProductInfo = async function (query) {
    try {
        const newProduct = new Products(query);
        const saveProduct = await newProduct.save();
        console.log(saveProduct);
        return saveProduct;

    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating Product')
    }
}

exports.updateProductInfo = async function (id,postProductData) {
    try {
        const changeProduct = await Products.findById(id);

        changeProduct.productName = postProductData.productName;
        changeProduct.productBrand =postProductData.productBrand;
        changeProduct.productCategory = postProductData.productCategory;
        changeProduct.productImageUrl = postProductData.productImageUrl;
        changeProduct.productColor = postProductData.productColor;
        changeProduct.productSize = postProductData.productSize;

        const updateProduct = await changeProduct.save();


        console.log(updateProduct);

        return updateProduct
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating Product')
    }
}

exports.removeProduct = async function (query) {
    try {
        const productRemove = await Products.findByIdAndDelete(query);

        return productRemove;
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating product')
    }
}

exports.getProductByUserid = async function (id) {
    try {
        const productSearch= await Products.find({ userId: id });
        return productSearch;
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating Product')
    }
}