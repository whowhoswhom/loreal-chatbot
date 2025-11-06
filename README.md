# L'Oréal Smart Routine & Product Advisor Chatbot

A branded AI-powered chatbot that helps customers navigate L'Oréal's product catalog and receive personalized beauty recommendations using OpenAI's GPT technology.

![L'Oréal Paris](https://img.shields.io/badge/L'Oréal-Paris-ff6b35?style=for-the-badge&logo=loreal)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--3.5-412991?style=for-the-badge&logo=openai)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=for-the-badge&logo=cloudflare)

## 🌟 Features

### Core Features
- ✅ **L'Oréal Brand Identity** - Official colors, logo, and professional styling
- ✅ **AI-Powered Responses** - Intelligent product recommendations via OpenAI
- ✅ **Topic Filtering** - Only answers L'Oréal and beauty-related questions
- ✅ **Secure Deployment** - API key protected via Cloudflare Workers
- ✅ **Responsive Design** - Works on mobile and desktop

### LevelUp Features
- 🎯 **Conversation Memory** (LevelUp 1) - Maintains chat history for context
- 💬 **User Question Display** (LevelUp 2) - Shows questions before responses
- 🎨 **Chat Bubble UI** (LevelUp 3) - Professional chat interface with styled bubbles

## 🚀 Quick Start

### Prerequisites
- OpenAI API Key ([Get one here](https://platform.openai.com/api-keys))
- Cloudflare Account ([Sign up free](https://dash.cloudflare.com/sign-up))
- Node.js installed (for Wrangler CLI)

### Step 1: Install Wrangler CLI

```bash
npm install -g wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

This will open your browser to authenticate.

### Step 3: Configure Your API Key

```bash
wrangler secret put OPENAI_API_KEY
```

When prompted, paste your OpenAI API key (starts with `sk-proj-...`).

### Step 4: Deploy the Worker

```bash
wrangler deploy
```

After deployment, you'll get a URL like:
```
https://loreal-chatbot-worker.your-subdomain.workers.dev
```

### Step 5: Update index.html

Open `index.html` and find line 343:

```javascript
const WORKER_URL = 'YOUR_WORKER_URL_HERE';
```

Replace with your actual Worker URL:

```javascript
const WORKER_URL = 'https://loreal-chatbot-worker.your-subdomain.workers.dev';
```

### Step 6: Deploy index.html

You can deploy your chatbot frontend using:

**Option A: GitHub Pages**
1. Go to your GitHub repo settings
2. Navigate to **Pages**
3. Select **main branch** as source
4. Your site will be live at: `https://yourusername.github.io/loreal-chatbot`

**Option B: Cloudflare Pages**
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Connect your GitHub repository
3. Deploy with default settings
4. Your site will be live instantly

**Option C: Any Static Host**
- Netlify
- Vercel
- Simple web hosting

### Step 7: Test Your Chatbot! 🎉

Open your deployed chatbot and try:
- "What's the best moisturizer for dry skin?"
- "Recommend a complete morning skincare routine"
- "Tell me about L'Oréal foundations"

## 📁 Project Structure

```
loreal-chatbot/
├── index.html          # Main chatbot interface
├── worker.js           # Cloudflare Worker (API proxy)
├── wrangler.toml       # Cloudflare configuration
├── task.md             # Project requirements checklist
└── README.md           # This file
```

## 🛠️ Technical Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **AI:** OpenAI API (GPT-3.5-turbo)
- **Backend:** Cloudflare Workers (Serverless)
- **Deployment:** GitHub Pages / Cloudflare Pages
- **Version Control:** GitHub

## 🔒 Security Features

- API key stored securely in Cloudflare environment variables
- Never exposed in frontend code
- CORS headers properly configured
- Request validation and error handling

## 🎨 Brand Guidelines

### Colors Used
- **Black:** `#000000` (Primary)
- **White:** `#FFFFFF` (Text/Background)
- **Orange/Gold:** `#ff6b35` (Accent)

### Typography
- Font: Helvetica Neue, Arial, sans-serif
- Professional spacing and letter-spacing for brand consistency

## 🧪 Testing Checklist

- [x] Chatbot responds to L'Oréal product questions
- [x] Refuses off-topic questions politely
- [x] Maintains conversation context
- [x] Loading indicator works
- [x] Mobile responsive design
- [x] API key not visible in DevTools
- [ ] Deployed and publicly accessible

## 🎓 Learning Outcomes

This project demonstrates:
1. **Frontend Development** - HTML/CSS/JavaScript best practices
2. **API Integration** - Working with OpenAI's Chat Completion API
3. **Serverless Architecture** - Cloudflare Workers deployment
4. **Security** - Proper API key management
5. **UX Design** - Chat interface and user experience
6. **Brand Implementation** - Corporate identity in web design

## 🐛 Troubleshooting

### "Worker URL not configured" error
- Make sure you've deployed the Worker and updated `WORKER_URL` in index.html

### "Failed to get response from AI"
- Check your OpenAI API key is correct
- Verify you have credits in your OpenAI account
- Check Cloudflare Worker logs: `wrangler tail`

### CORS errors
- The worker includes CORS headers, but verify your frontend and worker are deployed

### Messages not appearing
- Check browser console for JavaScript errors
- Verify your HTML file is properly saved

## 📊 Project Metrics

**Development Time:** ~4-6 hours  
**Lines of Code:** ~500  
**Files:** 4  
**APIs Used:** 1 (OpenAI)  
**Deployment Platforms:** 2 (Cloudflare Workers + Pages)

## 👨‍💻 Development Process

This chatbot was developed as part of **GEN 301-51 Global Career Accelerator** at the University of Louisville. The project focuses on:

- Real-world application of AI technology
- Professional-grade web development
- Secure API key management
- Brand implementation and user experience

## 🔮 Future Enhancements

Potential improvements:
- Product image integration
- Multi-language support
- Voice input capability
- Personalized routine builder
- Product comparison tool
- User preference saving

## 📝 License

This is an educational project created for University of Louisville coursework.  
L'Oréal Paris™ branding used for educational purposes only.

## 🤝 Contributing

This is an individual academic project. However, suggestions and feedback are welcome!

## 📧 Contact

**Developer:** Jose Fuentes
**Course:** GEN 301-51 Global Career Accelerator  
**Institution:** University of Louisville  
**Semester:** Fall 2025

---

**Made with 💄 for L'Oréal Paris**  
*Because you're worth it!*

