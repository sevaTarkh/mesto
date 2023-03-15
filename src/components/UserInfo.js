export class UserInfo{
    constructor({selectorName, selectorAbout, selectorLink}){
        this._name = document.querySelector(selectorName),
        this._about = document.querySelector(selectorAbout),
        this._avatar = document.querySelector(selectorLink)
    }
    getUserInfo(){
        const data = {
            selectorName: this._name.textContent,
            selectorAbout: this._about.textContent,
            selectorLink: this._avatar.src
        }
        return data
    }
    setUserInfo(data){
        this._name.textContent = data.name,
        this._about.textContent = data.about;
    }
    setAvatar(data){
        this._avatar.src = data.avatar
    }
}