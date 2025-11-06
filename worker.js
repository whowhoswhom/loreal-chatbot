// Cloudflare Worker for L'Oréal Chatbot
// This securely handles OpenAI API requests without exposing your API key

export default {
  async fetch(request, env) {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      // Get the conversation history from the request
      const { messages } = await request.json();

      // Validate that messages exist
      if (!messages || !Array.isArray(messages)) {
        return new Response(
          JSON.stringify({ error: 'Invalid request format' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // System prompt for L'Oréal beauty advisor
      const systemPrompt = {
        role: 'system',
        content: `You are a knowledgeable and friendly L'Oréal Paris beauty advisor. Your role is to:

1. Help customers discover L'Oréal products (skincare, makeup, haircare)
2. Provide personalized recommendations based on their needs
3. Explain product differences (serums vs treatments, foundations vs BB creams, etc.)
4. Suggest complete beauty routines
5. Use emojis tastefully to be engaging ✨

IMPORTANT RULES:
- ONLY answer questions about L'Oréal products, beauty, skincare, makeup, and haircare
- If asked about competitors (Maybelline, Revlon, etc.) or unrelated topics, politely redirect to L'Oréal
- Stay professional but friendly and enthusiastic
- Keep responses concise but helpful (2-4 sentences typically)
- Always end with an offer to help further

Example redirect: "I'm here specifically to help with L'Oréal products! 💄 What beauty concerns can I help you with today?"`
      };

      // Prepare the API request to OpenAI
      const openaiRequest = {
        model: 'gpt-3.5-turbo',
        messages: [systemPrompt, ...messages],
        temperature: 0.7,
        max_tokens: 300,
      };

      // Call OpenAI API
      const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify(openaiRequest),
      });

      // Check if OpenAI request was successful
      if (!openaiResponse.ok) {
        const error = await openaiResponse.text();
        console.error('OpenAI API Error:', error);
        return new Response(
          JSON.stringify({ error: 'Failed to get response from AI' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Get the AI response
      const data = await openaiResponse.json();
      const aiMessage = data.choices[0].message.content;

      // Return the response with CORS headers
      return new Response(
        JSON.stringify({ message: aiMessage }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );

    } catch (error) {
      console.error('Worker Error:', error);
      return new Response(
        JSON.stringify({ error: 'Internal server error' }),
        { 
          status: 500, 
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          } 
        }
      );
    }
  },
};

