export interface SubmittableFormInterface {
  submit(event: Event): Promise<void>;
}
