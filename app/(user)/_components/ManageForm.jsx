"use client";

import { useState, useEffect, useRef } from "react";
import party from "party-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LoaderIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

export default function ManageForm() {
  const { toast } = useToast();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [insta, setInsta] = useState("");
  const [face, setFace] = useState("");
  const [github, setGithub] = useState("");
  const [snapchat, setSnapchat] = useState("");
  const [youtube, setYoutube] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");


  const [loading, setLoading] = useState(true);
  const [isPublished, setIsPublished] = useState(false);


  const publishRef = useRef(null);


  useEffect(() => {
    if (loading) {
      fetch("/api/get")
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data.data) {
            const d = data.data;
            setUsername(d.username || "");
            setName(d.name || "");
            setBio(d.bio || "");
            setInsta(d.instagram || "");
            setFace(d.facebook || "");
            setGithub(d.github || "");
            setSnapchat(d.snapchat || "");
            setLinkedin(d.linkedin || "");
            setTwitter(d.twitter || "");
            setYoutube(d.youtube || "");
          }
        })
        .catch(() => setLoading(false));
    }
  }, [loading]);

  
  useEffect(() => {
    const flag = localStorage.getItem("celebratedProfile");
    if (flag) {
    
      party.confetti(document.body, {
        count: party.variation.range(80, 220),
        spread: 150,
      });
      localStorage.removeItem("celebratedProfile");
    }
  }, []);


  const handlePublishEvent = async (e) => {
    e.preventDefault();
    setIsPublished(true);

   
    if (username.length < 5) {
      toast({ title: "Username must be at least 5 characters long." });
      setIsPublished(false);
      return;
    }

    try {
      const res = await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          name,
          bio,
          instagram: insta,
          facebook: face,
          github,
          snapchat,
          youtube,
          linkedin,
          twitter,
        }),
      });
      const data = await res.json();

      if (data.error) {
        toast({ title: data.error });
        setIsPublished(false);
        return;
      }

      
      toast({ title: "Successfully published your profile!" });

    
      localStorage.setItem("celebratedProfile", "true");

      setTimeout(() => location.reload(), 1000);
    } catch (err) {
      toast({ title: "Something went wrong. Please try again." });
      setIsPublished(false);
    }
  };

  return (
    <form
      className="grid gap-2 mt-5 lg:px-40"
      onSubmit={handlePublishEvent}
    >
      {loading ? (
        <div className="grid gap-2 mt-5">
          <Skeleton className="h-5 w-20 mt-2" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-5 w-20 mt-2" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-5 w-20 mt-2" />
          <Skeleton className="h-20 w-full mb-8" />
          <Skeleton className="h-5 w-20 mt-2" />
          <Skeleton className="h-10 w-full" />
        </div>
      ) : (
        <div className="grid gap-2 mt-5">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim().toLowerCase())}
            placeholder="Username"
            maxLength={10}
            className="placeholder:text-gray-400 placeholder:text-sm"
          />

          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            maxLength={40}
            className="placeholder:text-gray-400 placeholder:text-sm"
          />

          <Label htmlFor="bio">About</Label>
          <Textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell others about yourself"
            maxLength={500}
            className="placeholder:text-gray-400 placeholder:text-sm"
          />

          {/* Social Links */}
          <p className="text-[13px] mt-4 text-gray-500">
            Add your social links. Skip any you don't have.
          </p>

          <Label htmlFor="youtube">YouTube</Label>
          <Input
            id="youtube"
            type="url"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
            placeholder="https://youtube.com/@username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="insta">Instagram</Label>
          <Input
            id="insta"
            type="url"
            value={insta}
            onChange={(e) => setInsta(e.target.value)}
            placeholder="https://instagram.com/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="face">Facebook</Label>
          <Input
            id="face"
            type="url"
            value={face}
            onChange={(e) => setFace(e.target.value)}
            placeholder="https://facebook.com/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="snapchat">Snapchat</Label>
          <Input
            id="snapchat"
            type="url"
            value={snapchat}
            onChange={(e) => setSnapchat(e.target.value)}
            placeholder="https://snapchat.com/add/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="twitter">Twitter</Label>
          <Input
            id="twitter"
            type="url"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            placeholder="https://twitter.com/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://linkedin.com/in/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <Label htmlFor="github">GitHub</Label>
          <Input
            id="github"
            type="url"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="https://github.com/username"
            className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"
          />

          <div className="grid mt-5">
            <Button
              ref={publishRef}
              type="submit"
              disabled={isPublished}
              className="w-full"
            >
              {isPublished ? (
                <LoaderIcon className="w-4 h-4 animate-spin" />
              ) : (
                "Publish"
              )}
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
