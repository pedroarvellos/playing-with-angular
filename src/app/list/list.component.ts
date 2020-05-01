import { Component, OnInit } from "@angular/core";
import {
  Technology,
  TechnologiesService,
} from "../services/technology.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  technologies: Technology[];

  constructor(private service: TechnologiesService) {}

  ngOnInit() {
    this.service
      .getAll()
      .subscribe((technologies) => this.technologies = technologies);
  }

  delete(id: number) {
    console.log(id)
    this.service.delete(id).subscribe((technologies) => this.technologies = technologies);
  }
}
