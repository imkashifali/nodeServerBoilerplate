const express = require("express");
var ProductService = require("../services/product.Services");

exports.getProducts = async function (req, res) {
  var product = await ProductService.getProducts({});

  if (!product) {
    res.status(404).json({ errorMsg: "product does not exist", status: false });
  } else {
    res
      .status(200)
      .json({ product, successMsg: "Records Listing", status: true });
  }
};

exports.getSingleProduct = async function (req, res) {
  const productSearch = await ProductService.getSingleProduct(req.params.id);

  if (!productSearch) {
    res.status(404).json({ errorMsg: "Record Not Fond", status: false });
  } else {
    res
      .status(200)
      .json({
        productSearch,
        successMsg: "Record Available Here",
        status: true,
      });
  }
};

exports.saveProductInfo = async function (req, res) {
  const newProduct = {
    userId : req.body.userId,
    productName: req.body.productName,
    productBrand: req.body.productBrand,
    productCategory: req.body.productCategory,
    productImageUrl: req.body.productImageUrl,
    productColor: req.body.productColor,
    productSize: req.body.productSize,
  };
  console.log(newProduct);

  const saveProduct = await ProductService.saveProductInfo(newProduct);

  if (!saveProduct) {
    res.status(404).json({ errorMsg: "Product does not save", status: false });
  } else {
    res.status(201).json({
      saveProduct,
      successMsg: "Product has been saved successfully",
      status: true,
    });
  }
};

exports.updateProductInfo = async function (req, res) {
  const postProductData = {};
  postProductData.productName = req.body.productName;
  postProductData.productBrand = req.body.productBrand;
  postProductData.productCategory = req.body.productCategory;
  postProductData.productImageUrl = req.body.productImageUrl;
  postProductData.productColor = req.body.productColor;
  postProductData.productSize = req.body.productSize;

  const updateRecord = await ProductService.updateProductInfo(
    req.params.id,
    postProductData
  );

  if (!updateRecord) {
    res
      .status(404)
      .json({ errorMsg: "Record does not Updated", status: false });
  } else {
    res.status(200).json({
      updateRecord,
      successMsg: "Record has been Updated successfully",
      status: true,
    });
  }
};

exports.removeProduct = async function (req, res) {
  const productRemove = await ProductService.removeProduct(req.params.id);

  if (!productRemove) {
    res.status(404).json({ errorMsg: "Record does not Remove", status: false });
  } else {
    res
      .status(200)
      .json({
        productRemove,
        successMsg: "Record has been Remove successfully",
        status: true,
      });
  }
};

 
exports.getProductByUserid = async function (req, res) {
  const ProductByUser = await ProductService.getProductByUserid(req.params.id);
  console.log(ProductByUser);
  if(!ProductByUser){
      res.status(404).json({errorMsg: "Record Not Fond", status: false })
    }else{
      res.status(200).json({ ProductByUser, successMsg: "Record Available Here",status: true})
    }

};