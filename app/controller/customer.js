import Pretender from '../service/pretender/Pretender';

exports.Main = (req, res) => {
  res.render("customer/main.ejs");
}

exports.CreateBody = async (req, res) => {
  console.log(req.body);
  var pretender = new Pretender(12,23);
  pretender.AI();
}

exports.UpdateBody = async (req, res) => {

}

exports.DeleteBody = async (req, res) => {

}
