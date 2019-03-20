import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuestionsService } from 'src/app/shared/services/questions.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.pug',
  styleUrls: ['./result-page.component.less']
})
export class ResultPageComponent implements OnInit {

  private search: string;
  result = [];
  constructor(private route: ActivatedRoute, private questionsService: QuestionsService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.search = params['searchElement'];
    });
    this.questionsService.getByIntitle(this.search).subscribe((data) => {
      this.result = data.items;
      console.log(this.result);
    });
  }
  openAnswer(id: number) {
    this.router.navigate(['/info'], {
      queryParams: {
        id: id
      }
    });
  }

}
