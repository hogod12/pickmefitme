import Installer from '../service/installer/Installer';

exports.Main = async (req, res) => {
  res.send("admin/main");
  var a = new Installer();
}
