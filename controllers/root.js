const rootModel = require("../models/root");
exports.getRootPage = (req, res) => {
  res.render("root.ejs", { user: null });
};
exports.editFeedback = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await rootModel.findOne({ where: { id } });
    res.render("root.ejs", { user });
  } catch (err) {
    console.log(err);
  }
};
