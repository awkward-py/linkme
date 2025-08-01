"use client"

import Logo from "@/components/Logo";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Share2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react"


export default function UserSocials({ userDataName }) {

    const [loding, setLoding] = useState(true);
    const [bio, setBio] = useState('');
    const [insta, setInsta] = useState('');
    const [face, setFace] = useState('');
    const [snapchat, setSnapchat] = useState('');
    const [github, setGithub] = useState('');
    const [youtube, setYoutube] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [twitter, setTwitter] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!bio && !insta && !face && !github && !youtube && !snapchat && !linkedin && !twitter) {
            let username = userDataName;
            fetch("/api/page/get", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "username": username }),
            })
                .then(res => res.json())
                .then(data => {
                    setLoding(false);
                    if (data.data !== null) {
                        setImage(data.data.image);
                        setName(data.data.name);
                        setBio(data.data.bio);
                        setInsta(data.data.instagram);
                        setFace(data.data.facebook);
                        setSnapchat(data.data.snapchat);
                        setLinkedin(data.data.linkedin);
                        setTwitter(data.data.twitter);
                        setGithub(data.data.github);
                        setYoutube(data.data.youtube);
                    }
                    else {
                        setError(true);
                    }
                });
        }
    });

    return (
        <div className="relative overflow-x-hidden px-6 md:px-20 lg:px-32 py-20 grid place-content-center">
            <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div onClick={() => { navigator.share({ url: location.href, title: name, text: name }) }} className="fixed top-5 right-5 md:top-10 md:right-32">
                <Button variant="pulseBtn" className="w-10 h-10 rounded-full p-0 flex items-center justify-center"><Share2 className="w-4 h-4" /></Button>
            </div>
          <div className="grid place-content-center mb-5 mt-14">
  {!image && (
    <Skeleton className="h-24 w-24 rounded-full" />
  )}

  {image && (
    <div className="relative w-32 h-32 rounded-full flex items-center justify-center bg-transparent">

      <div className="absolute inset-0 rounded-full border-4 border-blue-500" />

      
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full z-10 bg-background"
      />
    </div>
  )}
</div>

            <div className="grid place-content-center mb-14 text-center gap-1 px-2">
     <h1 className="text-3xl font-bold flex items-center">
  {name}
  {name && (
    <svg
      aria-label="Verified"
      className="ml-2"
      fill="gray"
      height="16"
      role="img"
      viewBox="0 0 40 40"
      width="16"
    >
      <path
        d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
        fillRule="evenodd"
      />
    </svg>
  )}
</h1>



                <p className="text-sm dark:text-gray-400 text-gray-600 max-w-[320px]">{bio}</p>
                {loding && (
                    <Skeleton className="h-8 w-40 mx-auto" />
                )}
                {loding && (
                    <Skeleton className="h-14 w-[300px] mx-auto" />
                )}
            </div>
            {loding && (
                <div className="grid gap-3 max-w-[600px]">
                    <Skeleton className="h-14 w-[300px] mx-auto" />
                    <Skeleton className="h-14 w-[300px] mx-auto" />
                    <Skeleton className="h-14 w-[300px] mx-auto" />
                    <Skeleton className="h-14 w-[300px] mx-auto" />
                </div>
            )}
            {!loding && (
                <div className="grid relative gap-3 grid-cols-1 max-w-[600px]">
                   {!youtube ? null : (
  <Link
    href={youtube}
    target="_blank"
    className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
  >
    <img
      src="/assets/youtube-icon.svg"
      alt="YouTube"
      className="absolute left-6 h-5 w-5"
      draggable="false"
    />
    My YouTube
  </Link>
)}

{!insta ? null : (
  <Link
    href={insta}
    target="_blank"
    className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
  >
    <img
      src="/assets/instagram-icon.svg"
      alt="Instagram"
      className="absolute left-6 h-5 w-5"
      draggable="false"
    />
    My Instagram
  </Link>
)}

{!face ? null : (
  <Link
    href={face}
    target="_blank"
    className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
  >
    <img
      src="/assets/facebook-icon.svg"
      alt="Facebook"
      className="absolute left-6 h-5 w-5"
      draggable="false"
    />
    My Facebook
  </Link>
)}

{!snapchat ? null : (
  <Link
    href={snapchat}
    target="_blank"
    className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
  >
    <img
      src="/assets/snapchat-icon.svg"
      alt="Snapchat"
      className="absolute left-6 h-5 w-5"
      draggable="false"
    />
    My Snapchat
  </Link>
)}

{!twitter ? null : (
  <Link
    href={twitter}
    target="_blank"
    className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
  >
    <img
      src="/assets/twitter-icon.svg"
      alt="Twitter"
      className="absolute left-6 h-5 w-5"
      draggable="false"
    />
    My Twitter
  </Link>
)}

{!linkedin ? null : (
  <Link
    href={linkedin}
    target="_blank"
    className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
  >
    <img
      src="/assets/linkedin-icon.svg"
      alt="LinkedIn"
      className="absolute left-6 h-5 w-5"
      draggable="false"
    />
    My LinkedIn
  </Link>
)}

                    {github && (
  <Link
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative dark:hover:text-black"
  >
    <img
      src="/assets/github-icon.svg"
      alt="GitHub"
      className="absolute left-6 h-6 w-6"
      draggable="false"
    />
    My Github
  </Link>
)}

                </div>
            )}
            {error && (
                <div className="-mt-20 mb-20 grid place-content-center">
                    <h1 className="font-bold text-center text-3xl mt-5">User not found.<span className="text-blue-600">.</span></h1>
                    <p className="text-center text-sm mt-2">Please double-check the username <br /> and try again.</p>
                    <Button href="https://www.linkmee.xyz" className="mt-5 w-full max-w-sm mx-auto">Back</Button>
                </div>
            )}
         <div className="mt-32 grid place-content-center text-center -mb-10">
  <Logo />
  {error ? (
    <p className="text-xs mt-2 text-[13px]">
      All rights reserved by <a href="/">LinkMe</a>
      
    </p>
    
  ) : (
    <p className="text-xs mt-2 text-[13px]">
      All rights reserved by {userDataName} with <a href="/">LinkMe</a>
    </p>
  )}
</div>


        </div>
    )
}
