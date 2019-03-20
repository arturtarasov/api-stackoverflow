import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url, Api } from '../interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})

export class QuestionsService {
    data: Url = {
        protocol: 'https',
        hostname: 'api.stackexchange.com',
        version: '2.2',
        method: 'search',
        order: 'desc',
        sort: 'activity',
        site: 'stackoverflow'
    }
    constructor( private http: HttpClient) {

    }
    getByIntitle(intitle: string): Observable<any> {
        this.data.intitle = intitle;
        return this.http.get<any>(`${this.data.protocol}://${this.data.hostname}/${this.data.version}/${this.data.method}?order=${this.data.order}&sort=${this.data.sort}&intitle=${this.data.intitle}&site=${this.data.site}`);
    }

    getAnserwsById(id: number): Observable<any> {
        this.data.method = `questions/${id}/answers`;
        this.data.filter = 'withbody';
        return this.http.get<any>(`${this.data.protocol}://${this.data.hostname}/${this.data.version}/${this.data.method}?order=${this.data.order}&sort=${this.data.sort}&site=${this.data.site}&filter=${this.data.filter}`);
    }
}