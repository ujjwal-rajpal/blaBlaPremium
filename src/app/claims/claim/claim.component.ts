import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit ,AfterContentChecked {

  checkClaim: string

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  ngAfterContentChecked(){  
    this.checkClaim =this.route.snapshot.queryParams.type
  }
}
