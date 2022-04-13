const categoryService = require("./service");

exports.getCategories = async () => {
  try {
    let categories = await categoryService.getCategories();
    categories = categories.map((item, index) => {
      item = {
        _id: item._id,
        name: item.name,
        description: item.description,
        index: index + 1,
      };

      return item;
    });
    return categories;
  } catch (error) {
    return [];
  }
};

exports.getCategoriesSelected = async (id) => {
  try {
    let data = await categoryService.getCategories();
    data = data.map((item) => {
      item = {
        _id: item._id,
        name: item.name,
        description: item.description,
        selected: item._id == id,
      };
      return item;
    });
    return data;
  } catch (error) {
    return {};
  }
};
exports.getCategoriesById = async (id) => {
  try {
    let category = await categoryService.getCategoriesById(id);
    category = {
      _id: category._id,
      name: category.name,
      description: category.description,
    };
    return category;
  } catch (error) {
    return {};
  }
};

exports.insert = async (category) => {
  try {
    await categoryService.insert(category);
  } catch (error) {}
};

exports.delete = async (id) => {
  try {
    await categoryService.delete(id);
  } catch (error) {}
};
exports.update = async (id, category) => {
  try {
    await categoryService.update(id, category);
  } catch (error) {}
};
