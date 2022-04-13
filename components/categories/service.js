const categoryModel = require('./model');
/*
description: lay danh sach san pham

*/

exports.getCategories= async()=>{
    // return data;
    return await categoryModel.find({},'id name description');
}


exports.getCategoriesById = async (id) => {
  // const product = data.filter((item) => item._id == id)[0];
  // return product;
  return categoryModel.findById(id);
};
/* 
them moi san pham
*/
exports.insert = async (category) => {
  const p = new categoryModel(category);
  await p.save();
};

/* 
xoa san pham
*/
exports.delete = async (id) => {
  // data = data.filter(item => item._id != id);
  await categoryModel.findByIdAndDelete(id);
};

exports.update = async (id, category) => {
  await categoryModel.findByIdAndUpdate(id, category);
}


var data = [{
  "_id": 1,
  "name": "Soup Campbells Mexicali Tortilla",
  "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
}, {
  "_id": 2,
  "name": "Flour - Masa De Harina Mexican",
  "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
}, {
  "_id": 3,
  "name": "Ecolab Digiclean Mild Fm",
  "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
}, {
  "_id": 4,
  "name": "Pork - Tenderloin, Fresh",
  "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
}, {
  "_id": 5,
  "name": "Cheese - La Sauvagine",
  "description": "Fusce consequat. Nulla nisl. Nunc nisl."
}, {
  "_id": 6,
  "name": "Shrimp - 150 - 250",
  "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
}, {
  "_id": 7,
  "name": "Yucca",
  "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
}, {
  "_id": 8,
  "name": "Table Cloth 81x81 White",
  "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
}, {
  "_id": 9,
  "name": "Wine - Piper Heidsieck Brut",
  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
}, {
  "_id": 10,
  "name": "Praline Paste",
  "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
}]