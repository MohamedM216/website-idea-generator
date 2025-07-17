# Website Idea Generator

A full-stack application that helps you ship your website idea in seconds.

## Tech Stack
- Frontend: Next.js (TypeScript), Tailwind CSS
- Backend: NestJS (TypeScript)
- Database: MongoDB

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)
- Git

### Installation

1. Clone the repository:
```bash
# Better for a slow internet connection
git clone git@github.com:MohamedM216/website-idea-generator.git
cd website-idea-generator
```

2. Set up backend:
```bash
cd backend
npm install
```

3. Set up frontend:
```bash
cd ../frontend
npm install
```

### Running the Application

1. Start MongoDB service

2. In one terminal:
```bash
# You should be in the root directory which is website-idea-generator
# cd ~/path/to/website-idea-generator
cd backend
npm run start:dev
```

3. In another terminal:
```bash
# You should be in the root directory which is website-idea-generator
# cd ~/path/to/website-idea-generator
cd frontend
npm run dev
```

4. Open http://localhost:3001 in your browser

### If I Had More Time

- Add user authentication
- Integrate with OpenAI API for real section generation
- Implement section editing functionality
- Add preview functionality with actual UI components
- Write comprehensive tests
- Add CI/CD pipeline
- Implement proper error handling and logging
- Add rate limiting for API endpoints
- Implement responsive design improvements

