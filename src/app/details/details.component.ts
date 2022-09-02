import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMoviesService } from '../get-movies.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
selectedId:any;
selectedMovie:any;
imgPrefix: string = "https://image.tmdb.org/t/p/w500";
  constructor(private _ActivatedRoute:ActivatedRoute, private _GetMoviesService:GetMoviesService ) 
  {
   this.selectedId= _ActivatedRoute.snapshot.params.id;
  this._GetMoviesService.getMovieDetails(this.selectedId).subscribe((data)=>{
      this.selectedMovie=data;
      // console.log(this.selectedMovie.genres[1].name)
    });
   }
   

  ngOnInit(): void {
  }

}
