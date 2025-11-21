## Setup

### Option 1: Using Docker Compose (Recommended for Production)

The easiest way to run this application is using Docker Compose:

1. **Prerequisites**: Make sure you have [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

2. **Build and run the application**:
   ```bash
   docker-compose up --build
   ```

3. **Access the application**: Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Stop the application**:
   ```bash
   docker-compose down
   ```

5. **Rebuild after changes**:
   ```bash
   docker-compose up --build
   ```

The Docker setup uses a multi-stage build that:
- Builds the React application with all dependencies
- Serves the production build using nginx
- Handles React Router routing automatically
- Includes optimized static asset caching

### Option 2: Local Development

Assuming that you have the necessary dependencies to start a React app:

1. **Install dependencies**:
   ```bash
   yarn install
   ```

2. **Start the development server**:
   ```bash
   yarn start
   ```

3. **Edit the file** `src/Data.js` in order to customize the content of your site.

4. Once started, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### New Blog Post
* Insert your `{post-name-here}.md` file inside the `posts` folder (organized by language: `en/`, `es/`, `de/`, `it/`, `fr/`).
* Edit the file `src/posts/Posts.js` adding the necessary information, including your markdown file location, to generate your post. The `route` and page will be generated based on what's inside `Posts.js`.
