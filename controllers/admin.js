const rootModel = require("../models/root");
exports.getAllFeedbacks = async (req, res) => {
  try {
    const allFeedbacks = await rootModel.findAll();
    res.render("admin.ejs", { feedback: allFeedbacks });
  } catch (err) {
    console.log({ err });
  }
};

exports.addFeedback = async (req, res) => {
  await rootModel.create({
    name: req.body.name,
    email: req.body.email,
    feedback: req.body.feedback,
  });
  res.redirect("/admin/feedback");
};

exports.deleteFeedback = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    await rootModel.destroy({ where: { id } });
    res.redirect("/admin/feedback");
  } catch (err) {
    console.log(err);
  }
};
exports.updateFeedback = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await rootModel.findOne({ where: { id } });
    user.name = req.body.name;
    user.email = req.body.email;
    user.feedback = req.body.feedback;
    user.save();
    res.redirect("/admin/feedback");
  } catch (err) {
    console.log(err);
  }
};
