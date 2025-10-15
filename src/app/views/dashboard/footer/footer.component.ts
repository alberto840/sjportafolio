import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private serviceID = 'service_zl92hck';
  private templateID = 'template_ybqy96u';
  private publicKey = '0Jps5NQq82gxdbFhk';

  public sendEmail(formData: any) {
    const templateParams = {
      ...formData,
    };

    emailjs.send(this.serviceID, this.templateID, templateParams, this.publicKey)
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Message failed to send. Please try again or contact me directly.');
      });
  }
}
