import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthIllustration from "../components/AuthIllustration";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative h-screen grid lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col justify-center items-center p-6 sm:p-12">
          <div className="w-full max-w-xl space-y-8 bg-base-100/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-base-300/50">
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 transform group-hover:scale-105">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl font-bold mt-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Welcome Back</h1>
                <p className="text-base-content/60 text-lg">Sign in to your account</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-lg">Email</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-base-content/40 group-focus-within:text-primary transition-colors" />
                  </div>
                  <input
                    type="email"
                    className="input input-bordered w-full pl-10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-lg">Password</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-base-content/40 group-focus-within:text-primary transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pl-10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-primary transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary w-full h-12 text-lg font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span className="ml-2">Loading...</span>
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            <div className="text-center">
              <p className="text-base-content/60 text-lg">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="link link-primary font-medium hover:underline">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
        <AuthIllustration
          title={"Welcome back!"}
          subtitle={"Sign in to continue your conversations and catch up with your messages."}
        />
      </div>
    </div>
  );
};

export default LoginPage;
