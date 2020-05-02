import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Renderer,
  ElementRef,
} from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import {
  Technology,
  TechnologiesService,
} from "../services/technology.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit, AfterViewInit {
  @ViewChild("technology", { static: true }) technologyReference: ElementRef;
  formName = "Technology Form";
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: TechnologiesService,
    private renderer: Renderer
  ) {}

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

  // I am using ngAfterViewInit just to put focus on the form with
  // a DOM reference of the component. I got this reference with the
  // decorator ViewChild, and the reference of this HTML element
  // is got by the #. Of course, this is not the greatest way to
  // do it. This is just to examplify the use of Redender2.
  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.technologyReference.nativeElement, "focus");
    // with this Rederer, I can change color (and many other things), for example
    // this.renderer.setElementStyle(this.technologyReference.nativeElement, "color", "pink");
  }

  get technology() {
    return this.form.controls["technology"];
  }

  get experience() {
    return this.form.controls["experience"];
  }

  addTechnology() {
    const technology: Technology = {
      technology: this.technology.value,
      experience: this.experience.value,
    };

    this.service.add(technology).subscribe((technology) => {
      console.log(technology.technology + " added.");
      this.form.reset();
    });
  }
}
