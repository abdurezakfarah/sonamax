export function getGreeting(): string {
  const now = new Date();
  const hour = now.getHours();

  if (hour < 12) {
    return "Good morning!";
  } else if (hour < 18) {
    return "Good afternoon!";
  } else {
    return "Good evening!";
  }
}
