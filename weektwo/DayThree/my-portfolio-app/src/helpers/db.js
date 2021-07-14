import {db} from '../service/firebase'

export function readContact(){
    let arr = []
    db.ref("contact").on("value", snapshot=>{
        snapshot.forEach(snapshot=>{
            arr.push(snap.val)
        })
        return arr
    })
}

export function writeContact(message){
    return db.ref("contact").push({
        content: message.content,
        timestamp: message.timestamp,
        uid: message.uid
    })
}