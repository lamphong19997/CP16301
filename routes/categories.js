var express = require("express");
var router = express.Router();

const categoryController = require("../components/categories/controller");

const authentication =require("../middle/authentication");

/**
 * http://localhost:3000/danh-muc/
 * method: get
 * desc: hiển thị danh sách sản phẩm
 */
 router.get("/",[], async function (req, res, next) {
    // lấy danh sách danh mục từ database và hiển thị
  
    const data = await categoryController.getCategories();
    console.log(data);
  
    res.render("categories", { categories: data });
  });
  
  /**
   * http://localhost:3000/danh-muc/
   * method: post
   * * middleware: trung gian (upload hinh, bat loi, kiem tra login...)
   * desc: thêm mới 1 danh mục
   */
  router.post("/", [], async function (req, res, next) {
    // thêm mới danh muc vào db
    let { body } = req;
    // body = { ...body};
    await categoryController.insert(body);
    // chuyen lai trang danh muc
  
    res.redirect("/danh-muc");
  });
  
  /**
   * http://localhost:3000/danh-muc/them-moi
   * method: get
   * desc: hiển thị trang them moi sản phẩm
   
   */
  router.get("/them-moi", [], async function (req, res, next) {
    // lấy chi tiet danh muc
  
    const categories = await categoryController.getCategories();
  
    res.render("category_insert", { categories: categories });
  });
  
  /**
   * http://localhost:3000/danh-muc/:id/edit
   * method: get
   * desc: hiển thị chi tiết 1 sản phẩm
   */
  router.get("/:id/edit",[], async function (req, res, next) {
    // lấy 1 sản phẩm từ database và hiển thị
  
    const { id } = req.params;
    // lay thong tin chi tiet san pham
  
    const category = await categoryController.getCategoriesById(id);
    
    res.render("category_edit", { category: category });
  });
  
  /**
   * http://localhost:3000/danh-muc/:id/edit
   * method: post
   * 10.82.164.9
   * ip truong
   * desc: hiển thị chi tiết 1 sản phẩm
   */
  router.post("/:id/edit",[],async function (req, res, next) {
    // update 1 sản phẩm vào db
    let { body, params } = req;
    body = { ...body};
    await categoryController.update(params.id,body);
  
    res.redirect("/danh-muc");
  });
  
  /**
   * http://localhost:3000/danh-muc/:id/delete
   * method: delete
   * desc: xóa 1 sản phẩm
   */
  router.delete("/:id/delete",[], async function (req, res, next) {
    // xóa 1 sản phẩm
    const { id } = req.params;
    await categoryController.delete(id);
    // tra ve ket qua xoa
  
    res.json({ result: true });
  });
  
module.exports = router;