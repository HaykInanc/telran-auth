export const login_request =  async (login, password, callback, error_callback) => {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: login,
          password: password
          // expiresInMins: 60, // optional
        })
      });

      const data = await response.json();
      response.status === 200 ? callback(data) : error_callback(data);
    }

export const writeCookie = (key, value) =>{
    document.cookie = `${key}=${value}`;
}