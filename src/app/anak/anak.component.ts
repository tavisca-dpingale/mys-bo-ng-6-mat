import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-anak',
  templateUrl: './anak.component.html',
  styleUrls: ['./anak.component.scss']
})
export class AnakComponent implements OnInit {

  constructor (private httpService: HttpClient) { }
  arrRachana: string [];

  ngOnInit () {
    this.httpService.get('./assets/rachana.json').subscribe(
      data => {
        this.arrRachana = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrRachana[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    $(document).ready(function(){
      $("audio").on("play", function() {
        $("audio").not(this).each(function(index, audio) {
            audio.pause();
        });
    });
  });

  }

}
