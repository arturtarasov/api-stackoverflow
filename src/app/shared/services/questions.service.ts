import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})

export class QuestionsService {
    data: Url = {
        protocol: 'https',
        hostname: 'api.stackexchange.com',
        version: '2.2',
        order: 'desc',
        sort: 'activity',
        site: 'stackoverflow'
    };
    constructor(private http: HttpClient) {

    }
    getByIntitle(intitle: string): Observable<any> {
        this.data.intitle = intitle;
        this.data.method = 'search';
        // tslint:disable-next-line:max-line-length
        return this.http.get<any>(`${this.data.protocol}://${this.data.hostname}/${this.data.version}/${this.data.method}?order=${this.data.order}&sort=${this.data.sort}&intitle=${this.data.intitle}&site=${this.data.site}`);
    }

    getAnserwsById(id: number): Observable<any> {
        const answerData: Url = this.data;
        answerData.method = `questions/${id}/answers`;
        answerData.filter = 'withbody';
        // tslint:disable-next-line:max-line-length
        return this.http.get<any>(`${answerData.protocol}://${answerData.hostname}/${answerData.version}/${answerData.method}?order=${answerData.order}&sort=${answerData.sort}&site=${answerData.site}&filter=${answerData.filter}`);
    }
}
