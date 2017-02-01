// simple email validator
export const emailValidator = email => {
  if (email.trim().match(/^[\S]+@[\S]+\.[\S]+$/)) {
    return '';
  }
  return 'Email is not valid';
};
