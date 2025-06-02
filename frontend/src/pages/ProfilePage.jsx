import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-100/80 backdrop-blur-sm rounded-2xl shadow-xl border border-base-300/50 p-6 space-y-8">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Profile</h1>
            <p className="mt-2 text-base-content/70">Your profile information</p>
          </div>

          {/* avatar upload section */}

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-32 rounded-full object-cover border-4 border-primary shadow-lg"
              />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 
                  bg-primary hover:bg-primary-focus text-primary-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                `}
              >
                <Camera className="w-5 h-5" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-base-content/60">
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-base-content/70 flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span className="font-medium">Full Name</span>
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border border-base-300 font-medium text-base-content">{authUser?.fullName}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-base-content/70 flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-medium">Email Address</span>
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border border-base-300 font-medium text-base-content">{authUser?.email}</p>
            </div>
          </div>

          <div className="mt-6 bg-base-200 rounded-xl p-6 space-y-4">
            <h2 className="text-lg font-semibold text-base-content">Account Information</h2>
            <div className="space-y-3 text-sm text-base-content/80">
              <div className="flex items-center justify-between py-2 border-b border-base-300">
                <span>Member Since</span>
                <span className="font-medium">{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="font-medium text-success">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
