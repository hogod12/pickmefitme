import Pretender from '../service/pretender/Pretender';

exports.Main = (req, res) => {
  res.render("customer/main.ejs");
}

exports.CreateBody = async (req, res) => {
  console.log(req.body.size1);
  console.log(req.body.size2);
  console.log(req.body.size3);
  var pretender = new Pretender(12,23);
  pretender.AI();
}

exports.UpdateBody = async (req, res) => {

}

exports.DeleteBody = async (req, res) => {

}
