export class UserInfo{
    constructor({name, about}){
        this._name = document.querySelector(name),
        this._about = document.querySelector(about)
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