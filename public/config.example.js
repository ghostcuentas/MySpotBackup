config = {
  "port": 8080,
  "uri": "https://ghostcuentas.github.io/MySpotBackup",
  "login_url": "https://ghostcuentas.github.io/MySpotBackup/login",
  "callback_uri": "https://ghostcuentas.github.io/MySpotBackup/callback",
  "client_id": "TU_CLIENT_ID_DE_SPOTIFY",
  "slowdown_import": 100,
  "slowdown_export": 100
}

if(module){
  module.exports = config;
}
