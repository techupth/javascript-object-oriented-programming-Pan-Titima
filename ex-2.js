class Notification { 
    constructor(notificationId, createdTime, content, receiver){
        this.notificationId = notificationId
        this.createdTime = createdTime
        this.content = content
        this.receiver = receiver
    }
    send(){
        console.log(`Notification has been sent to ${this.receiver}`);
    }
}

class EmailNotification extends Notification{ 
    constructor(notificationId, createdTime, content, receiver){
        super(notificationId, createdTime, content, receiver);
    }
}

class SMSNotification extends Notification{ 
    constructor(notificationId, createdTime, content, receiver){
        super(notificationId, createdTime, content, receiver);
    }

}

const emailNotification = new EmailNotification("1234", "20240604", "ABC", "email@mail.com");
emailNotification.send();

const smsNotification = new SMSNotification("1234", "20240604", "ABC", "089-1234567");
smsNotification.send();
