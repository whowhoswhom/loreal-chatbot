# L'Oréal Chatbot Project - Task Guide

## Project Overview
Build a branded chatbot for L'Oréal that helps customers navigate their product catalog and receive tailored recommendations using the OpenAI API. The chatbot must be styled with L'Oréal's brand identity and deployed securely using Cloudflare Workers.

**Course:** GEN 301-51 Global Career Accelerator  
**Due:** Friday, 11:59 PM  
**Total Points:** 80 + 25 bonus points available

---

## Requirements Checklist

### Core Requirements (80 points)

#### 1. L'Oréal Branding (10 points) ✅
- [x] L'Oréal Paris logo displayed
- [x] Official brand colors used (Black #000000, White #FFFFFF, Orange/Gold #ff6b35)
- [x] Professional styling that matches L'Oréal identity
- [x] Test on mobile and desktop

#### 2. Chatbot Configuration (20 points) ✅
- [x] System prompt configured for L'Oréal product expertise
- [x] Capture user input from text field
- [x] Send user input to OpenAI API
- [x] Display AI response in chat interface
- [x] Handle errors gracefully

#### 3. AI Relevance (10 points) ✅
- [x] Chatbot refuses unrelated questions
- [x] Only answers queries about L'Oréal products and beauty routines
- [x] Politely redirects off-topic conversations
- [x] Stays in character as L'Oréal beauty advisor

#### 4. Secure Deployment (10 points) ✅
- [x] Create Cloudflare Worker
- [x] Route API requests through Cloudflare Worker
- [x] API key is NOT exposed in frontend code
- [x] Test deployment is working correctly

#### 5. Reflection Questions (30 points total)
- [ ] **Building a Chatbot** (10 points) - Reflect on development experience
- [ ] **Talking Points** (10 points) - Key features to highlight
- [ ] **L'Oréal Recruiter** (10 points) - How to present this project

---

### LevelUp Bonuses (25 points available) ✅ ALL COMPLETE!

#### LevelUp 1: Maintain Conversation History (10 points) ✅
- [x] Store previous messages in conversation
- [x] Send conversation history to OpenAI
- [x] Chatbot remembers context from earlier messages
- [x] Handle conversation reset/clear

#### LevelUp 2: Display User Question Above Response (5 points) ✅
- [x] Show user's question before AI response
- [x] Style user questions distinctly
- [x] Clear input field after sending

#### LevelUp 3: Chat Conversation UI (10 points) ✅
- [x] User messages styled as chat bubbles (right side)
- [x] Bot messages styled as chat bubbles (left side)
- [x] Clear visual distinction between user/bot
- [x] Scrollable chat history

---

## Technical Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **AI:** OpenAI API (GPT-3.5-turbo or GPT-4)
- **Deployment:** Cloudflare Workers
- **Version Control:** GitHub

---

## Project Structure

```
loreal-chatbot/
├── index.html          # Main chatbot interface (COMPLETED)
├── worker.js           # Cloudflare Worker (TODO)
├── wrangler.toml       # Cloudflare config (TODO)
├── task.md             # This file
└── README.md           # Project documentation (TODO)
```

---

## Development Steps

### Phase 1: Frontend Development ✅
- [x] Create basic HTML structure
- [x] Style with L'Oréal branding
- [x] Build chat interface
- [x] Create message bubbles (LevelUp 3)
- [x] Add loading indicator
- [x] Make responsive for mobile/desktop

### Phase 2: OpenAI Integration (NEXT)
- [ ] Get OpenAI API key from platform.openai.com
- [ ] Write system prompt for L'Oréal expertise
- [ ] Create function to call OpenAI API
- [ ] Handle user input and display responses
- [ ] Add conversation history (LevelUp 1)
- [ ] Implement topic filtering (only L'Oréal related)

### Phase 3: Cloudflare Worker Setup
- [ ] Install Wrangler CLI
- [ ] Create Cloudflare Worker
- [ ] Configure API key as environment variable
- [ ] Proxy OpenAI requests through Worker
- [ ] Test secure deployment
- [ ] Update frontend to call Worker endpoint

### Phase 4: Testing & Refinement
- [ ] Test chatbot functionality
- [ ] Test on different devices
- [ ] Verify API key security
- [ ] Test conversation memory
- [ ] Test topic filtering
- [ ] Fix any bugs

### Phase 5: Documentation & Submission
- [ ] Answer reflection questions
- [ ] Create professional README
- [ ] Take screenshots for documentation
- [ ] Export submission as PDF
- [ ] Submit on Blackboard

---

## System Prompt (L'Oréal Beauty Advisor)

```
You are a knowledgeable and friendly L'Oréal Paris beauty advisor. Your role is to:

1. Help customers discover L'Oréal products (skincare, makeup, haircare)
2. Provide personalized recommendations based on their needs
3. Explain product differences (serums vs treatments, etc.)
4. Suggest complete beauty routines
5. Use emojis tastefully to be engaging ✨

IMPORTANT RULES:
- ONLY answer questions about L'Oréal products, beauty, skincare, makeup, and haircare
- If asked about competitors or unrelated topics, politely redirect to L'Oréal
- Stay professional but friendly and enthusiastic
- Keep responses concise but helpful
- Always end with an offer to help further

Example redirect: "I'm here specifically to help with L'Oréal products! 💄 What beauty concerns can I help you with today?"
```

---

## Current Progress

**✅ COMPLETED:**
- ✅ GitHub repository created and live
- ✅ Complete HTML structure with full L'Oréal branding
- ✅ Responsive chat interface (mobile + desktop)
- ✅ Message bubble styling (LevelUp 3 completed)
- ✅ Loading indicator
- ✅ Professional footer with links
- ✅ OpenAI API integration
- ✅ Cloudflare Worker deployed and configured
- ✅ Conversation history (LevelUp 1 completed)
- ✅ User/Bot message display (LevelUp 2 completed)
- ✅ Secure API key management
- ✅ Live deployment at GitHub Pages

**🔄 IN PROGRESS:**
- None

**📋 NEXT TASK:**
- Complete reflection questions for submission

---

## API Keys & Secrets

**OpenAI API Key:**
- Get from: https://platform.openai.com/api-keys
- Store in: Cloudflare Worker environment variables (NOT in code!)
- Format: `sk-proj-...`

**Cloudflare Account:**
- Sign up: https://dash.cloudflare.com/sign-up
- Free tier is sufficient

---

## Testing Checklist

Before submission, test:
- [ ] Chat interface loads correctly
- [ ] Can send messages and receive responses
- [ ] Bot only answers L'Oréal related questions
- [ ] Conversation history works (if implemented)
- [ ] Works on mobile devices
- [ ] Works on desktop browsers
- [ ] API key is not visible in browser DevTools
- [ ] Cloudflare Worker is routing requests
- [ ] Loading indicator appears while waiting
- [ ] Error handling works (try disconnecting internet)

---

## Resources

- **OpenAI API Docs:** https://platform.openai.com/docs
- **Cloudflare Workers:** https://developers.cloudflare.com/workers
- **L'Oréal Official Site:** https://www.lorealparisusa.com
- **Course Materials:** Available in GCA HQ platform

---

## Notes

- This is an experiential learning project for University of Louisville
- Focus on professional presentation and real-world applicability
- AI tools are encouraged for learning and development
- Document your process for reflection questions

---

## Submission Format

**PDF Document must include:**
1. Screenshots of working chatbot
2. Code snippets (key sections)
3. Reflection question answers
4. Link to GitHub repository
5. Link to live Cloudflare deployment (if working)

**Due:** Friday, 11:59 PM via Blackboard

---

*Last Updated: November 6, 2025*