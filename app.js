// khai báo các thư viện cần có
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



const cors = require('cors');
const session = require('express-session');
const mongoose = require('mongoose');
require('./components/users/model');
require('./components/categories/model');
require('./components/products/model');

// khai báo các file router
var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var apisRouter = require('./routes/api');
var categoriesRouter = require('./routes/categories');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'mykey',
  resave : true, 
  saveUninitialized : true,
  cookie: { secure: false }
}))

app.use(cors());
app.all('/', function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

mongoose.connect('mongodb+srv://admin:123@cluster0.to063.mongodb.net/Spring16301?retryWrites=true&w=majority', {  
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
.catch(err => console.log('>>>>>>>>> DB Error: ', err));


// http://localhost:3000/
// khai báo các đường dẫn
app.use('/', indexRouter);
app.use('/san-pham', productsRouter);
app.use('/api',apisRouter);
app.use('/danh-muc', categoriesRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

/**
 * 1. http://localhost:3000/dang-nhap
 * get: hiển thị trang đăng nhập
 * post: tiến hành đăng nhập
 *  nếu thành công chuyển qua hiển thị danh sách sp
 *  nếu không thành công vẫn ở đăng nhập
 * 
 * 2.http://localhost:3000/dang-xuat
 * get: tiến hành đăng xuất, quay trở lại đăng nhập
 * 
 * 3. http://localhost:3000/san-pham
 * get: hiển thị danh sách sản phẩm
 * post: thêm mới 1 sản phẩm
 * 
 * 4. http://localhost:3000/san-pham/:id/edit
 * get: hiển thị chi tiết thông tin 1 sản phẩm
 * put: cập nhật thông tin sản phẩm
 * 
 * 5. http://localhost:3000/san-pham/:id/delete
 * delete: xóa thông tin 1 sản phẩm
 * 
 * 6. http://localhost:3000/san-pham/thong-ke
 * get: thống kê sản phẩm
 * 
 * 7. http://localhost:3000/danh-muc
 * get: lấy danh sách danh mục sản phẩm
 * 
 * 
 * MVC: Model - View - Controller
 * 
 */



// lab 3
// tạo 1 project expressjs, view hbs
// viết 3 page
// page 1: login
// page 2: hiển thị danh sách sản phẩm (mã, tên, giá, ngày sản xuất, hình ảnh, nhã hàng.....)
// page 3: hiển thị chi tiết 1 sản phẩm















// hbs: view engine
// ejs, pug

// 4 requests
// get: gõ url trên địa chỉ trình duyệt, enter
// post
// put
// delete


// login
// danh sách (danh sách sp, ...)
// chi tiết (xem, thêm, xóa, sửa)
// form cập nhật, thêm mới
// thống kê
// ....



// lab 2
// tạo 1 project expressjs, view hbs
// viết 2 pages:
// http://localhost:3000/canh-day/10/chieu-cao/5
// render page có diện tích tam giác
// http://localhost:3000/
// render page có giao diện bootstraps


