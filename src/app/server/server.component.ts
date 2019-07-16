import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverid = 10;
    serverstatus = 'online'

    getservermethod () {
        return this.serverstatus;
    }
}