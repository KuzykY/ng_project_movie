import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IResults} from 'src/app/interfaces/result.interface';
import {MovieService} from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  searchValue: IResults[];

  constructor(private movieService: MovieService) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.minLength(2)])
    })

  }

  search() {
    let rawValue = this.form.getRawValue();
    this.movieService.search(rawValue.search).subscribe(({results}) => this.searchValue = results)
  }
}
