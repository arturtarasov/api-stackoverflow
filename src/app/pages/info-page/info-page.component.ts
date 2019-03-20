import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { QuestionsService } from 'src/app/shared/services/questions.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.pug',
  styleUrls: ['./info-page.component.less']
})
export class InfoPageComponent implements OnInit {

  info = [];
  id: number;
  constructor(private route: ActivatedRoute, private questionsService: QuestionsService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(params);
    });
    this.questionsService.getAnserwsById(this.id).subscribe((data) => {
      this.info = data.items;
      console.log(this.info);
    });
  }

}
