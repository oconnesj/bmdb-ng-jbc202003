import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css'],
})
export class ActorDetailComponent implements OnInit {
  actor: Actor = new Actor();
  title: string = 'Actor-Detail';
  actorId: number = 0;
  creditId: number = 0;
  credits: Credit[] = [];

  constructor(
    private creditSvc: CreditService,
    private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get the id from the route
    this.route.params.subscribe((parms) => (this.actorId = parms['id']));

    //get the actor for that actor
    this.actorSvc.get(this.actorId).subscribe((jr) => {
      this.actor = jr.data as Actor;
      console.log('Actor Found!', this.actor);
    });

    // get the movies for this actor
    this.creditSvc.getAllMoviesForActor(this.actorId).subscribe((jr) => {
      this.credits = jr.data as Credit[];
    });
  }

  delete() {
    this.actorSvc.delete(this.actorId).subscribe((jr) => {
      if (jr.errors == null) {
        console.log(jr.data);
        this.router.navigateByUrl('/actor/list');
      } else {
        console.log('*** Error deleting actor!', this.actorId, jr.errors);
      }
    });
  }
}
