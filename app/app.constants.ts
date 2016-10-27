import {Injectable} from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = 'http://localhost:1337/';
    public ApiUrl: string = 'order/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}