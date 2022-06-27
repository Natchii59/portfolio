export function getAge(): number {
  const birthday = new Date('April 10, 2003 00:00:00');
  const age = new Date(Date.now() - birthday.getTime());

  return Math.abs(age.getUTCFullYear() - 1970);
}
