config = {
    "port": 8080,
    "uri": "https://ghostcuentas.github.io/MySpotBackup",
    "login_url": "https://ghostcuentas.github.io/MySpotBackup/login",
    "callback_uri": "https://ghostcuentas.github.io/MySpotBackup/callback",
    "client_id": "1fb9edefb7c244e1befa19704ce3433d",
    "slowdown_import": 100,
    "slowdown_export": 100
}

if(module){
    module.exports = config;
}
