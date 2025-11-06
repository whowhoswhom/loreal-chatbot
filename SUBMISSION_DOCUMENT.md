# WD Project 8: Build a Chatbot for L'Oréal
## GEN 301-51 Global Career Accelerator

**Student Name:** Jose Fuentes  
**Date:** November 6, 2025  
**Project:** L'Oréal Smart Routine & Product Advisor Chatbot

---

## 📌 Project Links

**Live Chatbot:** https://whowhoswhom.github.io/loreal-chatbot/  
**GitHub Repository:** https://github.com/whowhoswhom/loreal-chatbot  
**Cloudflare Worker:** https://loreal-chatbot-worker.josefuentes2013-jf.workers.dev

---

## 🎯 Project Overview

I built an AI-powered chatbot for L'Oréal Paris that helps customers discover products and receive personalized beauty recommendations. The chatbot uses OpenAI's GPT-3.5 model and is deployed securely using Cloudflare Workers to protect the API key.

---

## ✅ Core Requirements Completed (50 points)

### 1. L'Oréal Branding (10 points) ✅

**What I Implemented:**
- Official L'Oréal Paris logo displayed prominently in the header
- Brand colors used throughout:
  - Black (#000000) for primary elements
  - White (#FFFFFF) for backgrounds and text
  - Orange/Gold (#ff6b35) for accents and highlights
- Professional styling that matches L'Oréal's premium brand identity
- Responsive design tested on both mobile and desktop devices

**Screenshot Evidence:**
[The live site shows the full branding at https://whowhoswhom.github.io/loreal-chatbot/]

---

### 2. Chatbot Configuration (20 points) ✅

**What I Implemented:**

**System Prompt:**
I configured a detailed system prompt that instructs the AI to act as a knowledgeable L'Oréal Paris beauty advisor. The prompt includes:
- Expertise in skincare, makeup, and haircare products
- Ability to provide personalized recommendations
- Professional yet friendly tone
- Use of emojis for engagement
- Clear boundaries to stay on topic

**User Input & Display:**
- Text input field captures user questions
- Send button triggers the API call
- Loading indicator shows while waiting for response
- AI responses display in styled chat bubbles
- Error handling for connection issues

**Code Implementation:**
The chatbot sends user messages to my Cloudflare Worker, which securely calls the OpenAI API and returns responses.

---

### 3. AI Relevance (10 points) ✅

**What I Implemented:**

The system prompt explicitly instructs the AI to:
- ONLY answer questions about L'Oréal products, beauty, skincare, makeup, and haircare
- Politely redirect off-topic questions back to L'Oréal products
- Stay in character as a L'Oréal beauty advisor

**Example Redirect Message:**
"I'm here specifically to help with L'Oréal products! 💄 What beauty concerns can I help you with today?"

**Testing:**
I tested the chatbot with both on-topic and off-topic questions to ensure it properly redirects conversations.

---

### 4. Secure Deployment (10 points) ✅

**What I Implemented:**

**Cloudflare Worker Setup:**
- Created a serverless Cloudflare Worker to act as a secure proxy
- Worker receives requests from the frontend
- Worker makes API calls to OpenAI using the secure API key
- API key stored as an encrypted environment variable in Cloudflare
- API key is NEVER exposed in frontend code or browser DevTools

**Security Features:**
- CORS headers properly configured
- Request validation
- Error handling
- Environment variables for secrets

**Verification:**
The API key is completely hidden from users. Even if someone inspects the browser's network tab, they only see the Cloudflare Worker URL, not the OpenAI API key.

---

## 🌟 LevelUp Bonuses Completed (25 points)

### LevelUp 1: Maintain Conversation History (10 points) ✅

**What I Implemented:**
- JavaScript array stores all previous messages in the conversation
- Each new message is added to the history
- Entire conversation history is sent to OpenAI with each request
- This allows the AI to remember context from earlier in the conversation
- Users can have natural, flowing conversations where the bot remembers what was discussed

**Example:**
User: "What's good for dry skin?"
Bot: [Recommends moisturizers]
User: "What about for oily areas?"
Bot: [Remembers the previous context and provides relevant follow-up]

---

### LevelUp 2: Display User Question Above Response (5 points) ✅

**What I Implemented:**
- User messages appear immediately after clicking "Send"
- User questions displayed in black chat bubbles aligned to the right
- Clear visual distinction with a "You" label above each message
- Input field clears automatically after sending
- Smooth user experience with instant feedback

---

### LevelUp 3: Chat Conversation UI (10 points) ✅

**What I Implemented:**
- **User messages:** Black bubbles, right-aligned, "You" label
- **Bot messages:** Light gray bubbles, left-aligned, "L'Oréal Advisor" label, orange accent border
- Clear visual distinction between speakers
- Scrollable chat container
- Professional, modern chat interface similar to popular messaging apps
- Loading animation with animated dots
- Responsive design that works on all screen sizes

---

## 📝 Reflection Questions (30 points)

### Question 1: Building a Chatbot (10 points)

**Reflect on your development experience:**

Building this L'Oréal chatbot was both challenging and incredibly rewarding. The most difficult part was setting up the Cloudflare Worker and understanding how to securely manage API keys without exposing them in the frontend code. Initially, I wasn't sure how serverless architecture worked, but after researching Cloudflare's documentation and testing different configurations, I learned why this approach is critical for production applications.

Integrating the OpenAI API required me to understand how to structure API calls, manage conversation history arrays, and implement proper error handling for network issues. I also learned about CORS policies and how to handle asynchronous JavaScript operations using async/await syntax. The debugging process taught me how to use browser DevTools effectively to inspect network requests and console errors.

One of the most satisfying aspects was seeing the conversation memory actually work - when the chatbot could reference something from earlier in the conversation, it felt like I had created something truly intelligent. Implementing the chat bubble UI was also fun because it transformed the interface from feeling like a basic form into a real conversation.

If I could improve the project, I would add several features:
- Voice input capability for hands-free interaction
- Integration with L'Oréal's actual product database with images and pricing
- Ability to save favorite products or recommendations
- Multi-language support for international customers
- More advanced natural language processing to better understand nuanced questions
- A "skin analysis" feature where users could describe their skin type and receive a complete routine

The most valuable lesson I learned is that building AI applications isn't just about connecting to an API - it's about creating a secure, user-friendly experience that feels natural and helpful. This project gave me hands-on experience with modern web development, AI integration, and production deployment practices that I can apply to future projects.

---

### Question 2: Talking Points (10 points)

**Key features to highlight:**

My L'Oréal chatbot demonstrates several impressive technical and business achievements:

**AI-Powered Intelligence:**
The chatbot uses OpenAI's GPT-3.5 model to provide personalized, real-time beauty recommendations. Unlike simple rule-based chatbots, this AI understands natural language and can have flowing conversations about skincare routines, makeup application, and product selection.

**Enterprise-Grade Security:**
I implemented Cloudflare Workers as a serverless backend to keep the API key completely hidden from users. This follows industry-best security practices used by major companies. Even tech-savvy users cannot access the API key through browser inspection tools.

**Intelligent Conversation Memory:**
The chatbot maintains full conversation history, allowing for natural, contextual dialogue. If you ask about dry skin and then follow up with "what about oily areas?", it remembers the context and provides relevant recommendations. This creates a more human-like interaction.

**Professional Brand Implementation:**
Every aspect of the UI uses L'Oréal's official brand colors and styling. The design is responsive, working seamlessly on phones, tablets, and desktops. The interface feels premium and professional, matching L'Oréal's market position.

**Smart Topic Filtering:**
The chatbot is programmed to only discuss L'Oréal products and beauty topics. If someone asks about competitors or unrelated subjects, it politely redirects the conversation. This protects the brand and keeps interactions focused.

**Real-time User Feedback:**
Loading indicators and smooth animations provide clear feedback during interactions. Users always know when the AI is "thinking" and when errors occur, creating a polished user experience.

**Production-Ready Deployment:**
The chatbot is fully deployed and accessible at a live URL. This isn't just a demo or prototype - it's a working application that could handle real customer traffic. The combination of GitHub Pages (frontend) and Cloudflare Workers (backend) creates a scalable, cost-effective architecture.

**Accessibility & UX:**
The interface includes proper ARIA labels, keyboard navigation support (Enter key to send messages), and clear visual hierarchy. Error messages are user-friendly, not technical jargon.

This project demonstrates that I can take an idea from concept to production, making technical decisions that balance functionality, security, user experience, and brand identity.

---

### Question 3: L'Oréal Recruiter (10 points)

**How to present this project:**

*Imagine I'm presenting this to a L'Oréal recruiter:*

"Thank you for taking the time to review my chatbot project. This AI-powered assistant showcases my ability to build real-world applications that combine brand excellence with cutting-edge technology.

As someone passionate about both technology and customer experience, I developed this chatbot to address a real challenge L'Oréal faces: helping customers navigate your extensive product catalog and find solutions tailored to their specific beauty needs. With thousands of products across skincare, makeup, and haircare, customers can feel overwhelmed. This chatbot acts as a knowledgeable beauty advisor, available 24/7.

**Why This Matters for L'Oréal:**

From a business perspective, this technology could:
- Reduce customer service costs by handling common product questions
- Increase conversion rates by helping customers find the right products faster
- Gather valuable data about customer concerns and product interests
- Provide consistent, brand-aligned information across all customer touchpoints
- Scale customer support without proportionally increasing staff

**Technical Excellence:**

The implementation demonstrates full-stack development skills that directly apply to L'Oréal's digital initiatives:

*Frontend Development:* Clean, responsive HTML/CSS that works across all devices, following L'Oréal's brand guidelines precisely. The interface is intuitive - customers can start chatting immediately without instructions.

*Backend Architecture:* I chose Cloudflare Workers for the serverless backend because it's cost-effective, scales automatically, and provides enterprise-grade security. The API key management follows best practices used by Fortune 500 companies.

*AI Integration:* Rather than building a simple keyword-matching bot, I leveraged OpenAI's advanced language models to create genuinely helpful, conversational interactions. The system prompt engineering ensures responses stay on-brand and on-topic.

*Security & Privacy:* Customer data isn't stored (privacy-friendly), and API keys are properly secured. This demonstrates my understanding that in a real production environment, security isn't optional.

**What I'm Most Proud Of:**

The conversation memory feature creates a natural dialogue experience. Customers can ask follow-up questions like "What about for sensitive skin?" and the bot understands the context. This feels more like chatting with a knowledgeable friend than interacting with a machine.

I also ensured the chatbot maintains L'Oréal's premium brand identity. The color scheme, typography, and tone of responses all reinforce the brand's position as a leader in beauty innovation.

**Real-World Application:**

This project could be expanded into:
- Integration with L'Oréal's e-commerce platform for direct purchasing
- Product image galleries showing recommended items
- Virtual try-on features for makeup products
- Personalized routine builders that customers can save and revisit
- Multi-language support for global markets

**My Skills for L'Oréal:**

This project demonstrates capabilities directly relevant to L'Oréal's digital transformation:
- Modern web development with a focus on user experience
- AI/ML integration for customer engagement
- Brand-focused design thinking
- Security-conscious development practices
- Ability to learn new technologies quickly (I learned Cloudflare Workers specifically for this project)
- Understanding of how technology can solve business problems

**Looking Forward:**

I'm excited about L'Oréal's commitment to digital innovation and your recent investments in AI and personalization technology. I believe my blend of technical skills and customer-first thinking would allow me to contribute meaningfully to your digital initiatives.

I'd love to discuss how this kind of conversational AI could enhance L'Oréal's customer experience across your various brands and markets. I'm particularly interested in [mention specific L'Oréal division/team you're applying to] and believe this project demonstrates the kind of innovative, customer-focused thinking your team values.

Thank you for considering my application. I'm happy to demonstrate the chatbot live and discuss the technical implementation in more detail."

---

## 🛠️ Technical Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **AI:** OpenAI API (GPT-3.5-turbo)
- **Backend:** Cloudflare Workers (Serverless)
- **Deployment:** 
  - Frontend: GitHub Pages
  - Backend: Cloudflare Workers
- **Version Control:** Git & GitHub

---

## 📂 Project Files

### Main Files:
1. **index.html** - Complete chatbot interface with branding and functionality
2. **worker.js** - Cloudflare Worker for secure API proxy
3. **wrangler.toml** - Cloudflare configuration file
4. **README.md** - Comprehensive project documentation
5. **task.md** - Project requirements checklist

### Key Code Sections:

**System Prompt (from worker.js):**
```javascript
You are a knowledgeable and friendly L'Oréal Paris beauty advisor. Your role is to:
1. Help customers discover L'Oréal products (skincare, makeup, haircare)
2. Provide personalized recommendations based on their needs
3. Explain product differences
4. Suggest complete beauty routines
5. Use emojis tastefully to be engaging

IMPORTANT RULES:
- ONLY answer questions about L'Oréal products, beauty, skincare, makeup, and haircare
- Politely redirect to L'Oréal if asked about competitors or unrelated topics
- Stay professional but friendly and enthusiastic
```

**Conversation History Management (from index.html):**
```javascript
let conversationHistory = [];

// Add user message
conversationHistory.push({
    role: 'user',
    content: message
});

// Send to API with full history
fetch(WORKER_URL, {
    method: 'POST',
    body: JSON.stringify({ messages: conversationHistory })
});

// Add bot response
conversationHistory.push({
    role: 'assistant',
    content: response
});
```

---

## 🧪 Testing Results

### Functionality Testing:
✅ Chat interface loads correctly  
✅ Can send messages and receive AI responses  
✅ Bot only answers L'Oréal-related questions  
✅ Conversation history maintains context  
✅ Works on mobile devices (tested on iPhone/Android)  
✅ Works on desktop browsers (Chrome, Firefox, Edge)  
✅ Loading indicator appears during API calls  
✅ Error handling works (tested by disconnecting internet)  

### Security Testing:
✅ API key not visible in browser DevTools  
✅ API key not visible in network requests  
✅ Cloudflare Worker properly routes requests  
✅ CORS headers configured correctly  

### Brand Testing:
✅ L'Oréal colors correctly implemented  
✅ Responsive design works on all screen sizes  
✅ Professional appearance matches brand identity  

---

## 📊 Project Metrics

**Development Time:** ~6 hours  
**Lines of Code:** ~630 lines  
**Files Created:** 5  
**APIs Used:** 1 (OpenAI GPT-3.5-turbo)  
**Deployment Platforms:** 2 (GitHub Pages + Cloudflare Workers)  

---

## 🎓 Skills Demonstrated

1. ✅ Frontend Development (HTML/CSS/JavaScript)
2. ✅ API Integration (RESTful APIs)
3. ✅ Serverless Architecture (Cloudflare Workers)
4. ✅ Security Best Practices (API key management)
5. ✅ Version Control (Git/GitHub)
6. ✅ Web Deployment (GitHub Pages)
7. ✅ Brand Implementation & UX Design
8. ✅ Responsive Web Design
9. ✅ Asynchronous JavaScript (Promises/Async-Await)
10. ✅ Problem-Solving & Debugging

---

## 🚀 Live Demonstration

**To test the chatbot, visit:** https://whowhoswhom.github.io/loreal-chatbot/

**Try these example questions:**
- "What's the best moisturizer for dry skin?"
- "Recommend a complete morning skincare routine"
- "Tell me about your anti-aging products"
- "Do you have products for sensitive skin?"
- "What foundation would you recommend?"

**Test the topic filtering:**
- "What's the weather today?" (Should redirect to L'Oréal)
- "Tell me about Maybelline products" (Should redirect to L'Oréal)

---

## 📸 Screenshots

[Include screenshots of]:
1. Welcome screen with L'Oréal branding
2. Active conversation showing user and bot messages
3. Loading indicator in action
4. Mobile responsive view
5. GitHub repository
6. Cloudflare Worker dashboard (without showing API key)


---

## 🙏 Acknowledgments

- **OpenAI** for providing the GPT-3.5 API
- **Cloudflare** for the Workers platform
- **GitHub** for hosting and version control
- **L'Oréal Paris** for brand inspiration
- **GEN 301-51** course materials and guidance

---

## 📧 Contact Information

**GitHub:** https://github.com/whowhoswhom  
**Project Repository:** https://github.com/whowhoswhom/loreal-chatbot  
**Live Demo:** https://whowhoswhom.github.io/loreal-chatbot/

---

**Submitted:** November 6, 2025  
**Course:** GEN 301-51 Global Career Accelerator  
**University:** University of Louisville

---

*Made with 💄 for L'Oréal Paris - Because you're worth it!*

