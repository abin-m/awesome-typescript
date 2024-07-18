interface User {
    username: string;
    password: string;
  }
  
  const user: User = {
    username: "admin",
    password: "password123",
  };
  
  function authenticate(username: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (username === user.username && password === user.password) {
        resolve("Authentication successful!");
      } else {
        reject("Invalid credentials.");
      }
    });
  }
  
  authenticate("admin", "password123")
    .then(message => console.log(message))
    .catch(error => console.error(error));

export {}