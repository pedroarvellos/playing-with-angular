import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Technology } from '../services/technology.service';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  formName = "Technology Form";
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      technology: ["", [Validators.required, Validators.maxLength(10)]],
      experience: [
        "",
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern("^[0-9]*$"),
        ],
      ],
    });
  }

  get technology() {
    return this.form.controls["technology"];
  }

  get experience() {
    return this.form.controls["experience"];
  }

  checkValue() {
    console.log(this.technology);
  }

  addTechnology() {
    const technology: Technology = {
      technology: this.technology.value,
      experience: this.experience.value,
    };
    console.log(technology);
  }
}
