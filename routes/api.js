var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");

const userController = require("../components/users/controller");
const productController = require("../components/products/controller");
const authentication = require("../middle/authentication");
/**
 * http://localhost:3000/api/login
 * method: post
 * desc: tiến hành đăng nhập
 */
 router.post("/login", async function (req, res, next) {
    const { username, password } = req.body;
    // tiến hành đăng nhập
    const user = await userController.login(username, password);
  
    // nếu thành công thì chuyển qua sản phẩm
    if (user) {
      // luư thông tin vào trong token
      const token = jwt.sign({ id: user._id, username: user.username }, 'mykey');
      
      res.json({ status: true, id: user._id, username: user.username, token})
    } else {
      res.json({status: false})
    }
  });



  /**
 * http://localhost:3000/api/register
 * method: post
 * desc: tiến hành đăng ký
 */
 router.post("/register", async function (req, res, next) {
    const { username, password,confirm_password } = req.body;
    // tiến hành đăng nhập
    const user = await userController.register(username, password,confirm_password);
  
    // nếu thành công thì chuyển qua sản phẩm
    if (user) {
      // luư thông tin vào trong token
      res.json({status: true})
    } else {
      res.json({status: false})
    }
  });

/**
 * http://localhost:3000/api/products/
 * method: get
 * desc:lấy danh sách sản phẩm
 */
 router.get("/products",[authentication.checkToken], async function (req, res, next) {
  // lấy danh sách sản phẩm từ database và hiển thị

  const products = await productController.getProducts();
  
  res.json(products);
});
/**
 * http://localhost:3000/products/:id/detail
 * method: get
 * desc: lấy chi tiết 1 sản phẩm
 */
 router.get("/products/:id/detail",[authentication.checkToken], async function (req, res, next) {
  // lấy 1 sản phẩm từ database và hiển thị

  const { id } = req.params;
  // lay thong tin chi tiet san pham
  const product = await productController.getProductById(id);
  // lay danh sach danh muc
  res.json(product);
})
module.exports = router;