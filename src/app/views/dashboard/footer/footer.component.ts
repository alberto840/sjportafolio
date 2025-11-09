import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { AfterSentEmailDialogComponent } from '../after-sent-email-dialog/after-sent-email-dialog.component';
import { CommonModule } from '@angular/common';

interface FormData {
  user_email: string;
  user_message: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isLoading = signal(false);
  messageText = signal('');
  messageType = signal<'success' | 'error'>('success');

  // Model to bind form inputs
  model: FormData = {
    user_email: '',
    user_message: '',
  };

  private serviceID = 'service_zl92hck';
  private templateID = 'template_ybqy96u';
  private publicKey = '0Jps5NQq82gxdbFhk';

  constructor(public dialog: MatDialog) { }

  public async sendEmail(form: NgForm) {
    if (form.invalid) return;

    this.isLoading.set(true);
    this.messageText.set(''); // Clear previous messages

    const templateParams = {
      ...form.value, // NgForm.value contains the raw data
    };

    try {
      const response = await emailjs.send(this.serviceID, this.templateID, templateParams, this.publicKey);

      console.log('SUCCESS!', response.status, response.text);
      form.resetForm();
      this.openDialog('Success', 'Your message was send');
    } catch (error) {
      console.error('FAILED...', error);
      this.openDialog('Error', 'Failed to send message. Please try again later.');
    } finally {
      this.isLoading.set(false);
      setTimeout(() => this.messageText.set(''), 5000);
    }
  }

  openDialog(title?: string, message?: string) {
    this.dialog.open(AfterSentEmailDialogComponent,
      {
        width: '500px',
        data: {
          title: title ?? 'Success',
          message: message ?? 'Your message was sent successfully!'
        },
      }
    );
  }
}
