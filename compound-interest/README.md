# Compound Interest Calculator

A simple compound interest calculator because all the ones online are horrible.

### Start Instructions
1. **Open a Terminal:**
   Open a terminal window on your computer. The steps to do this depend on your operating system. For example, on Linux, you might use `Ctrl + Alt + T`, and on macOS, you can use `Command + Space` to open Spotlight, type "Terminal," and press `Enter`.

2. **Navigate to the Directory:**
   Use the `cd` command to navigate to the directory where your HTML file is located. For example, if your file is in the Documents folder, you might use:

   ```bash
   cd <PATH_TO_REPO>/compound-interest-calculator
   ```

3. **Start the Apache Server:**
   Use the `httpd` command to start the Apache server. If you don't have Apache installed, you may need to install it first. The commands for installing Apache vary based on your operating system.

   - On Ubuntu or Debian:

     ```bash
     sudo apt-get update
     sudo apt-get install apache2
     ```

   - On CentOS or RHEL:

     ```bash
     sudo yum install httpd
     sudo systemctl start httpd
     ```

   - On macOS (using Homebrew):

     ```bash
     brew install httpd
     ```

   After installation, you can start the server:

   ```bash
   sudo apachectl start
   ```

   If you are not using `sudo`, you might not be able to bind to the default ports (80 and 443), so you may need to choose a different port.

   ```bash
   apachectl start -k start -DFOREGROUND -c "Listen 8080"
   ```

   This command starts Apache in the foreground and listens on port 8080.

4. **Access the Web Page:**
   Open a web browser and navigate to `http://localhost` or `http://localhost:8080` (if you chose a different port). You should see your HTML page.

5. **Stop the Apache Server:**
   When you're done, you can stop the Apache server:

   ```bash
   sudo apachectl stop
   ```

   If you used a different port, specify it in the command.

Keep in mind that these instructions may vary depending on your operating system. Adjustments may be needed based on your system's configuration. Additionally, be cautious when using `sudo` to start services, as it gives elevated privileges, and it's important to understand the security implications.