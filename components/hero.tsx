"use client";
import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from "./ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Send, Sparkles, Wand2, Zap, ArrowRight, Stars } from "lucide-react";
import { suggestions } from "@/data/constant";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";

function Hero() {
  const [userInput, setUserInput] = useState<string>("");
  const [designType, setDesignType] = useState<string>("website");
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onCreateProject = async () => {
    if (!user) {
      router.push("/sign-in");
      return;
    }

    if (!userInput.trim()) {
      // You might want to show an error message here
      console.error("Please enter a description");
      return;
    }

    setLoading(true);
    try {
      const projectId = uuidv4();
      const result = await axios.post("/api/project", {
        userInput: userInput.trim(),
        device: designType,
        projectId: projectId,
      });

      // Handle successful creation

      toast.success("Project successfully created");
      router.push(`/projects/${projectId}`);

      // Use the result data
      console.log("Project created:", result.data);
    } catch (error) {
      console.error("Failed to create project:", error);
      toast.error("Failed to create projetct");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        {/* Animated Blobs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 80, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ✨ AI-Powered Design Generator
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="block text-gray-900">Design High-Quality</span>
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            In Seconds, Not Hours
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
        >
          From stunning websites to beautiful mobile apps. Imagine your idea and
          watch it
          <span className="font-semibold text-blue-600">
            {" "}
            turn into reality instantly
          </span>
          .
        </motion.p>

        {/* Main Input Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white/90 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl p-1">
            <InputGroup className="bg-transparent">
              <InputGroupTextarea
                data-slot="input-group-control"
                className="flex field-sizing-content min-h-32 w-full resize-none bg-transparent text-lg border-none focus:ring-0 focus:outline-none placeholder:text-gray-400"
                placeholder="Describe your dream design... ✨
                Example: 'A modern e-commerce website with dark theme and gradient buttons'"
                value={userInput}
                onChange={(e) => setUserInput(e.target?.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    onCreateProject();
                  }
                }}
              />
              <InputGroupAddon
                align={"block-end"}
                className="bg-transparent px-6 pb-6"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <Select
                      defaultValue="website"
                      onValueChange={setDesignType}
                    >
                      <SelectTrigger className="w-full bg-white/80 backdrop-blur-sm border-gray-200">
                        <div className="flex items-center gap-2">
                          <Wand2 className="w-4 h-4 text-blue-500" />
                          <SelectValue placeholder="Design Type" />
                        </div>
                      </SelectTrigger>
                      <SelectContent className="line-clamp-2">
                        <SelectItem
                          value="website"
                          className="flex items-center gap-2"
                        >
                          🌐 Website Design
                        </SelectItem>
                        <SelectItem
                          value="mobile"
                          className="flex items-center gap-2"
                        >
                          📱 Mobile App
                        </SelectItem>
                        <SelectItem
                          value="logo"
                          className="flex items-center gap-2"
                        >
                          🎨 Logo Design
                        </SelectItem>
                        <SelectItem
                          value="branding"
                          className="flex items-center gap-2"
                        >
                          🏷️ Brand Identity
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    onClick={onCreateProject}
                    size="lg"
                    disabled={loading || !userInput.trim()}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Generating...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        <span>Generate Design</span>
                      </div>
                    )}
                  </Button>
                </div>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </motion.div>

        {/* Quick Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <p className="text-gray-500 text-sm font-medium mb-4">
            Try these ideas or create your own:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {suggestions.map((suggestion, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setUserInput(suggestion.description)}
                className="group relative cursor-pointer border-none bg-transparent p-0"
                type="button"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-purple-300 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-200"></div>
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-blue-300 transition-all duration-200 group-hover:shadow-lg min-w-[120px]">
                  <div className="text-2xl">{suggestion.icon}</div>
                  <p className="text-sm font-medium text-gray-700 text-center">
                    {suggestion.name}
                  </p>
                  <Stars className="w-3 h-3 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-200/50"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-600">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-sm">Designs Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                99%
              </div>
              <div className="text-sm">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                30s
              </div>
              <div className="text-sm">Average Generation Time</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-8 hidden lg:block"
      >
        <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-200">
          <Sparkles className="w-6 h-6 text-purple-500" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-8 left-8 hidden lg:block"
      >
        <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-200">
          <Wand2 className="w-6 h-6 text-blue-500" />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
