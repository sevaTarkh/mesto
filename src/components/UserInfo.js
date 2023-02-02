export class UserInfo{
    constructor({selectorName, selectorAbout}){
        this._name = document.querySelector(selectorName),
        this._about = document.querySelector(selectorAbout)
    }
    getUserInfo(){
        const data = {
            name: this._name.textContent,
            about: this._about.textContent
        }
        return data
    }
    setUserInfo(data){
        this._name.textContent = data['name-author'],
        this._about.textContent = data['about-author'];
    }
}