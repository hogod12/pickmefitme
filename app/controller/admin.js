import Installer from '../service/installer/Installer';

exports.Main = async (req, res) => {
  res.send("admin/main");
}

exports.Install = async (req, res) => {
  var installer = new Installer();
  installer.install();
}
