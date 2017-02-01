
export const confirmPasswords = (password, confirmPassword) => {
  if (typeof password !== 'string' || typeof confirmPassword !== 'string') {
    return 'Password must be a string';
  } else if (password.length < 6 && confirmPassword.length > 0) {
    return 'Password must be longer';
  } else if (confirmPassword.length > 0 && password !== confirmPassword) {
    return 'Passwords do not match';
  }
  return '';
};
