export function isValidEmail(email) {
  if (typeof email !== 'string') return false;

  const atIndex = email.indexOf('@');
  if (atIndex === -1) return false;
  if (atIndex === 0 || atIndex === email.length - 1) return false;
  if (email.includes(' ')) return false;

  const domain = email.substring(atIndex + 1);
  const dotIndex = domain.indexOf('.');

  if (dotIndex === -1 || dotIndex === domain.length - 1) return false;

  return true;
}

