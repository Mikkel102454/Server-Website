

function InitSettings(){
    LoadLocalSettings(); // not implemented yet
    SyncLocalSettingsWithServer(); // not implemented yet
    LoadLocalSettings(); // not implemented yet
}


function LoadLocalSettings(){
    const settings = {
        theme: localStorage.getItem('theme') || 'dark-mode' // Default is falback
    };
    document.body.className = settings.theme;
}

function SyncLocalSettingsWithServer(){
    var data = {"handleCode": 110, "token": token}; // not implemented yet
    var response = ExchangeServer(data)

    response.forEach(element => {
        if(element.type === 'setting'){
            SaveLocalSetting(element.settingName, element.value);
        }
    });
}
function SaveSetting(settingName, value) {

}
function SaveLocalSetting(settingName, value) {

}
