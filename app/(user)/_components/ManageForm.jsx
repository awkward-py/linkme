"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { LoaderIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Skeleton } from "@/components/ui/skeleton"

export default function ManageForm() {
    const { toast } = useToast();

    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [insta, setInsta] = useState('');
    const [face, setFace] = useState('');
    const [github, setGithub] = useState('');
    const [snapchat, setSnapchat] = useState('');
    const [youtube, setYoutube] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [twitter, setTwitter] = useState('');
    const [name, setName] = useState('');
    const [loding, setLoding] = useState(true);

    const [isPublished, setIsPublished] = useState(false);

    const handlePublishEvent = async (e) => {
        setIsPublished(true);
        e.preventDefault();
        if (username.length < 5) {
            toast({
                title: "Username length is less than 5, please make it longer!"
            });
            setIsPublished(false);
            return;
        }
        await fetch("/api/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, bio, insta, face, github, youtube, name, snapchat, twitter, linkedin }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                    toast({
                        title: data.error
                    })
                }
                else {
                    toast({
                        title: "Successfully published your profile",
                    });
                    setTimeout(() => {
                        location.reload();
                    }, 1000)
                }
            });

        setIsPublished(false);
    };

    useEffect(() => {
        if (!username && !bio && !insta && !face && !github && !youtube && !snapchat && !linkedin && !twitter) {
            fetch("/api/get")
                .then(res => res.json())
                .then(data => {
                    setLoding(false);
                    if (data.data !== null) {
                        console.log(data)
                        setName(data.data.name);
                        setUsername(data.data.username);
                        setBio(data.data.bio);
                        setInsta(data.data.instagram);
                        setFace(data.data.facebook);
                        setGithub(data.data.github);
                        setSnapchat(data.data.snapchat);
                        setLinkedin(data.data.linkedin);
                        setTwitter(data.data.twitter);
                        setYoutube(data.data.youtube);
                    }
                });
        }
    }, []);

    return (
        <form className="grid gap-2 mt-5 lg:px-40" method="post" onSubmit={handlePublishEvent}>
            {!loding && (

                
                <div className="grid gap-2 mt-5">
                 
                    <Label htmlFor="username" className="mt-2">Username</Label>
                    <Input value={username} onChange={(e) => setUsername(e.target.value.trim().toLowerCase())} id="image" type="text" placeholder="Username"  className="placeholder:text-gray-400 placeholder:text-sm" maxLength={10}/>

                    <Label htmlFor="name" className="mt-2">Full Name</Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="Your full name"  className="placeholder:text-gray-400 placeholder:text-sm" maxLength={40}/>

                    <Label htmlFor="bio" className="mt-2">About</Label>
                    <Textarea value={bio} onChange={(e) => setBio(e.target.value)} id="bio" placeholder="Tell others about yourself like who you are"  className="placeholder:text-gray-400 placeholder:text-sm" maxLength={500}></Textarea>
                    
                     <p className="text-[13px] mt-8 mb-[-5] text-gray-500">Add your social links. Skip any you don't have.</p>

                    <Label htmlFor="youtube" className="mt-3">YouTube</Label>
                    <Input value={youtube} onChange={(e) => setYoutube(e.target.value)} id="youtube" type="url" placeholder="https://youtube.com/@username"   className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"/>

                    <Label htmlFor="insta" className="mt-2">Instagram</Label>
                    <Input value={insta} onChange={(e) => setInsta(e.target.value)} id="insta" type="url" placeholder="https://instagram.com/username"   className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"/>

                    <Label htmlFor="face" className="mt-2">Facebook</Label>
                    <Input value={face} onChange={(e) => setFace(e.target.value)} id="face" type="url" placeholder="https://facebook.com/username"  className="placeholder:text-gray-400 placeholder:text-sm text-blue-600" />

                    <Label htmlFor="snapchat" className="mt-2">Snapchat</Label>
                    <Input value={snapchat} onChange={(e) => setSnapchat(e.target.value)} id="snapchat" type="url" placeholder="https://snapchat.com/add/username"   className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"/>
                    
                    <Label htmlFor="twitter" className="mt-2">Twitter</Label>
                    <Input value={twitter} onChange={(e) =>setTwitter(e.target.value)} id="twitter" type="url" placeholder="https://twitter.com/username" className="placeholder:text-gray-400 placeholder:text-sm text-blue-600" />
                    
                    <Label htmlFor="linkedin" className="mt-2">LinkedIn</Label>
                    <Input value={linkedin} onChange={(e) =>setLinkedin(e.target.value)} id="linkedin" type="url" placeholder="https://linkedin.com/in/username"   className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"/>
                    
                    <Label htmlFor="github" className="mt-2">Github</Label>
                    <Input value={github} onChange={(e) => setGithub(e.target.value)} id="github" type="url" placeholder="https://github.com/username"   className="placeholder:text-gray-400 placeholder:text-sm text-blue-600"/>
                    
                    <div className="grid mt-5">
                        <Button className="w-full" type="submit" disabled={isPublished}>{isPublished ? (<LoaderIcon className="w-4 h-4 animate-spin" />) : "Publish"}</Button>
                    </div>
                </div>
            )}

            {loding && (
                <div className="grid gap-2 mt-5">
                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-20 w-full mb-8" />

                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <div className="flex gap-2 mt-8">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                </div>
            )}
        </form>
    )
}
