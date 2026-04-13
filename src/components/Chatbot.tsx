import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "bot";
  content: string;
}

const quickReplies: Record<string, string> = {
  "What courses do you offer?": "We offer courses in Web Development, Data Science, UI/UX Design, Mobile Development, and more! Visit our Courses page to explore.",
  "How do I enroll?": "Simply click 'Get Started' on any course page, create an account, and you're ready to learn!",
  "What are the pricing plans?": "We offer Free, Pro ($19/mo), and Enterprise plans. Each includes different levels of access to our course library.",
  "Do you offer certificates?": "Yes! All Pro and Enterprise plan members receive verified certificates upon course completion.",
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi there! 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text };
    const reply = quickReplies[text] || "Thanks for your message! Our team will get back to you shortly. For immediate help, please visit our Contact page.";
    setMessages((prev) => [...prev, userMsg, { role: "bot", content: reply }]);
    setInput("");
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Toggle chatbot"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl border bg-card card-shadow overflow-hidden flex flex-col" style={{ maxHeight: "70vh" }}>
          <div className="hero-gradient px-5 py-4 text-primary-foreground">
            <h3 className="font-heading font-semibold text-lg">EduFlow Assistant</h3>
            <p className="text-xs opacity-80">Ask us anything about our platform</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[320px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          {/* Quick replies */}
          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {Object.keys(quickReplies).slice(0, 2).map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="border-t p-3 flex gap-2">
            <input
              className="flex-1 bg-muted rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            />
            <Button size="icon" onClick={() => sendMessage(input)} className="shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
