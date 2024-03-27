# Deploying a Vite Project on GitHub Pages

The process of deploying a Vite project on GitHub Pages.

## Steps

1. **Create a new Vite project**

  ```bash
  npm create vite@latest
  ```
2. **Code your project, Follow next step when ready to deploy**

3. **Set the base in `vite.config.js`**

  Update the `REPO-NAME` with the repository name or endpoint:

  ```javascript
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'

  // https://vitejs.dev/config/
  export default defineConfig({
    base: '/REPO-NAME/',
    plugins: [react()],
  })
  ```

  This sets the base URL for the project when it's deployed.

4. **Update the deployment link in the README**

  Replace the existing deployment link in repository's README file with the new GitHub Pages link.

5. **Commit and push your changes**

  Commit and push your changes to the repository. This will trigger the deployment process on GitHub Pages.