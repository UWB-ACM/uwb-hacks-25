'use server';

export async function logoutUser() {
    // Also note that this code runs server-side, so you'll only see outputs in the terminal rather than in inspect element.
  // this is my guess for the logout function
  // I think if we clear the session cookie it will automatically log the user out
  // and redirect them to the login page. This is a bit of a hack, but it works.
  // checkout /src/app/api/auth/google/route.ts for more info
  console.log("Logging out...");
}
