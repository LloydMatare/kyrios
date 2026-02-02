"use client";

import { useState } from "react";
import { Camera, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Theme_Name_List, Themes } from "@/data/themes";

type ThemeKey = keyof typeof Themes;

function Settings() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey>("Aurora");
  const [projectName, setProjectName] = useState("");
  const [newScreenPrompt, setNewScreenPrompt] = useState("");

  const handleGenerateScreen = () => {
    // Handle screen generation logic here
    console.log("Generating screen with prompt:", newScreenPrompt);
  };

  const handleTakeScreenshot = () => {
    // Handle screenshot logic here
    console.log("Taking screenshot");
  };

  const handleShareProject = () => {
    // Handle share logic here
    console.log("Sharing project");
  };

  return (
    <div className="w-[300px] h-[90vh] p-3 border-r overflow-y-auto">
      <h1 className="font-medium text-lg">Settings</h1>

      <div className="mt-3">
        <h2 className="font-medium mb-2">Project Name</h2>
        <Input
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="mt-5">
        <h2 className="font-medium mb-2">Generate New Screen</h2>
        <Textarea
          value={newScreenPrompt}
          onChange={(e) => setNewScreenPrompt(e.target.value)}
          placeholder="Describe the screen you want to generate..."
          className="min-h-[100px] resize-none"
        />
        <Button
          className="w-full mt-3 gap-2"
          onClick={handleGenerateScreen}
          disabled={!newScreenPrompt.trim()}
        >
          <Sparkles className="w-4 h-4" />
          <span>Generate Screen</span>
        </Button>
      </div>

      <div className="mt-5">
        <h2 className="font-medium mb-2">Themes</h2>
        <div className="h-[200px] overflow-y-auto pr-1">
          <div className="space-y-2">
            {Theme_Name_List.map((theme) => (
              <ThemeOption
                key={theme}
                theme={theme as ThemeKey}
                isSelected={selectedTheme === theme}
                onClick={() => setSelectedTheme(theme as ThemeKey)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="font-medium mb-2">Extras</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-2"
            onClick={handleTakeScreenshot}
          >
            <Camera className="w-4 h-4" />
            <span>Screenshot</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-2"
            onClick={handleShareProject}
          >
            <Camera className="w-4 h-4" />
            <span>Share</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Sub-component for theme selection
interface ThemeOptionProps {
  theme: ThemeKey;
  isSelected: boolean;
  onClick: () => void;
}

function ThemeOption({ theme, isSelected, onClick }: ThemeOptionProps) {
  const themeData = Themes[theme];

  return (
    <div
      className={`p-3 border rounded-xl cursor-pointer transition-all duration-200 ${
        isSelected
          ? "border-primary bg-primary/10 ring-1 ring-primary"
          : "border-border hover:border-primary/50 hover:bg-muted/50"
      }`}
      onClick={onClick}
    >
      <p className="text-sm font-semibold mb-2">{theme}</p>
      <div className="flex items-center gap-1.5">
        <div
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: themeData.primary }}
          title="Primary"
        />
        <div
          className="h-4 w-4 rounded-full border"
          style={{ backgroundColor: themeData.secondary }}
          title="Secondary"
        />
        <div
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: themeData.accent }}
          title="Accent"
        />
        <div
          className="h-4 w-4 rounded-full border"
          style={{ backgroundColor: themeData.background }}
          title="Background"
        />
        <div
          className="h-4 w-4 rounded-full border"
          style={{
            background: `linear-gradient(135deg, ${themeData.background}, ${themeData.primary}, ${themeData.accent})`,
          }}
          title="Gradient Preview"
        />
      </div>
    </div>
  );
}

export default Settings;
