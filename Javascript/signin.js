    function login() {
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      let isValid = true;

      // Username check
      if (username === "") {
        document.getElementById('userError').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('userError').style.display = 'none';
      }

      // Email check (basic)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('emailError').style.display = 'none';
      }

      // Password check
      if (password === "") {
        document.getElementById('passError').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('passError').style.display = 'none';
      }

      if (isValid) {
        alert(`Login Successful!\nWelcome ${username}`);
        // You can redirect or store the data securely
      }
    }