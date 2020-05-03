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
  confirmationMessage: string;

  constructor(private service: TechnologiesService) {}

  ngOnInit() {
    this.service
      .getAll()
      .subscribe((technologies) => (this.technologies = technologies));

    this.confirmationMessage = "Technologies fetched!";
  }

  delete(technology: Technology) {
    this.service.delete(technology.id).subscribe((technologies) => {
      this.technologies = technologies;
      this.confirmationMessage = technology.technology + " deleted!";
    });
  }
}
