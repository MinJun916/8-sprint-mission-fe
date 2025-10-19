import validator from 'validator';

export const isEmailValid = (email) => {
  if (typeof email !== 'string') return false;
  if (email.trim().length === 0) return false;
  return validator.isEmail(email);
};

export const isPasswordValid = (password) => {
  const passwordString = String(password || '');
  if (passwordString.trim().length === 0) return false;
  return validator.isLength(passwordString, { min: 8 });
};
