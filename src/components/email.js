import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_46ku34j';  // Replace with your EmailJS Service ID
const TEMPLATE_ID = 'template_uiwl4vu'; // Replace with your EmailJS Template ID
const PUBLIC_KEY = '-6GN40CJYc3SQ0LlL';   // Replace with your EmailJS Public Key

export const sendEmail = (formData) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
};
