import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.pug',
  styleUrls: ['./search-page.component.less']
})
export class SearchPageComponent implements OnInit {

  form: FormGroup;
  searchEl: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      search: new FormControl(null, Validators.required)
    });
  }

  onSearch() {
    console.log(this.form.value.search);
    this.router.navigate(['/result'], {
      queryParams: {
        searchElement: this.form.value.search
      }
    });
  }

}
