import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class QuestionsService {
    constructor( private http: HttpClient) {

    }
    getByIntitle(intitle: string): Observable<any> {
        return this.http.get<any>(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${intitle}&site=stackoverflow`);
    }

    getAnserwsById(id: number): Observable<any> {
        return this.http.get<any>(`https://api.stackexchange.com/2.2/questions/${id}/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody`);
    }
}