import { MessageSquare, Shield, Lock, Users } from "lucide-react";

const AuthIllustration = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-12 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-10 max-w-md text-center">
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-base-100/80 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300">
            <MessageSquare className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Real-time Chat</h3>
            <p className="text-sm text-base-content/60">Instant messaging with end-to-end encryption</p>
          </div>
          <div className="p-6 rounded-2xl bg-base-100/80 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300">
            <Shield className="w-8 h-8 text-secondary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Secure</h3>
            <p className="text-sm text-base-content/60">Your messages are always protected</p>
          </div>
          <div className="p-6 rounded-2xl bg-base-100/80 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300">
            <Lock className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Private</h3>
            <p className="text-sm text-base-content/60">End-to-end encryption for all conversations</p>
          </div>
          <div className="p-6 rounded-2xl bg-base-100/80 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300">
            <Users className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Connect</h3>
            <p className="text-sm text-base-content/60">Chat with friends and colleagues</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-lg text-base-content/70">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthIllustration; 