import {Record} from 'immutable';

interface INotification {
    level: Notification.Level;
    text: string;
    timestamp: number;
}
const DefaultNotification: INotification = {
    level: null,
    text: null,
    timestamp: null,
};
const NotificationRecord = Record(DefaultNotification);


export class Notification extends NotificationRecord implements INotification {
    level: Notification.Level;
    text: string;
    timestamp: number;

    constructor(props) {
        props.timestamp = Date.now();

        super(props);
    }
}


export module Notification {
    export enum Level {
        SUCCESS         = <any> "success",
        INFO            = <any> "info",
        WARNING         = <any> "warning",
        DANGER          = <any> "danger",
    }
}
