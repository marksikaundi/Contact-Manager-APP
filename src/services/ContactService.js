import axios from "axios";


export class ContactService {
    static serverURL = `http://localhost:9000`;

    static getGroups(){
        let dataURL = `${this.serverURL}/groups`;
        return axios.get(dataURL);
    }

    static getGroup(contact){
        let groupId = contact.groupId;
        let dataURL = `${this.serverURL}/groups/${groupId}`;
        return axios.get(dataURL);
    }

    static getAllContacts(){
        let dataURL = `${this.serverURL}/contacts`;
        return axios.get(dataURL);
    }

    static getContact(contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.get(dataURL);
    }

}