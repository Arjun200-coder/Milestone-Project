

export const validateLogin = (email, password) => {
  const errors = {
    email: '',
    password: '',
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!password.trim()) {
    errors.password = 'Password cannot be empty';
  }

  const isValid = !errors.email && !errors.password;

  return { isValid, errors };
};



export const validateRegister = ({ name, email, password, confirmPassword }) => {
  const errors = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.trim()) {
    errors.name = 'Name is required';
  }

  if (!emailPattern.test(email)) {
    errors.email = 'Invalid email format';
  }

  if (!password) {
    errors.password = 'Password is required';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  const isValid = Object.values(errors).every((msg) => msg === '');

  return { isValid, errors };
};


// utils/resetPasswordValidation.js

export const validateResetPassword = (email) => {
  const errors = {
    email: ''
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Invalid email format';
  }

  const isValid = Object.values(errors).every((msg) => msg === '');

  return { isValid, errors };
};
