"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "~/components/ui/button";
import { Apple, Github, PlaySquare } from "lucide-react";
import Link from "next/link";
import { type ElementType } from "react";
import { Badge } from "~/components/ui/badge";

type Link = {
    icon: ElementType;
    name: string;
    url: string;
};

type Project = {
    name: string,
    description: string;
    contentType: "image" | "video";
    url: string;
    alt: string;
    links: Link[];
};

const projects: Project[] = [
  {
    name: "PIN Network App",
    url: "/projects/pin-network-hero.png",
    alt: "pin-network-app",
    contentType: "image",
    description: "While working at PayItNow I refactor there existing app built on top of an old version of React Native, up to current standards and design with Expo. We revamped the payment and bridging flows to give users a better experience while making payments and managing there funds.",
    links: [
        {
            name: "Google Play",
            icon: () => <PlaySquare />,
            url: "https://play.google.com/store/apps/details?id=io.payitnow.pinnetwork&pli=1"
        },
        {
            name: "App Store",
            icon: () => <Apple />,
            url: "https://apps.apple.com/app/id1622027412"
        }
    ]
  },
  {
    name: "expo-select-dropdown",
    description: "When working on the PIN Network App we had quite a few issues with trying to find a dropdown selector that would work for our needs in our store locator. We weren't able to find a optimal solution at the time, so I create this dropdown package that was mean't to add the feature that we needed like flexible filtering callbacks and search.",
    url: "/projects/expo-select-dropdown-preview.mp4",
    alt: "expo-select-dropdown-preview",
    contentType: "video",
    links: [
        {
            name: "Github",
            icon: () => <Github />,
            url: "https://github.com/bjtrounson/expo-select-dropdown"
        }
    ]
  }
]

export function ProjectCarousel() {
    return (
        <div className="flex flex-col gap-y-2 mx-auto">
            <Badge className="text-base w-fit rounded-lg mx-auto">Projects</Badge>
            <Carousel className="w-full max-w-lg" plugins={[
                Autoplay({delay: 12000})
            ]}>
                <CarouselContent>
                    {projects.map((project, index) => (
                    <CarouselItem key={index}>
                        <Card>
                            <CardHeader>
                                {project.contentType === "image" ? (
                                    <div className="h-60 p-2">
                                        <Image 
                                            className="max-h-60 w-full pointer-events-none mx-auto object-cover object-top"
                                            src={project.url} 
                                            alt={project.alt} 
                                            fill
                                        />
                                    </div>
                                ) : (
                                    <video 
                                        className="pointer-events-none mx-auto h-60 w-full object-cover object-top" 
                                        src={project.url} 
                                        autoPlay 
                                        loop 
                                        playsInline
                                        muted
                                    />
                                )}
                            </CardHeader>
                            <CardContent className="flex flex-col gap-y-2 justify-center">
                                <CardTitle>{project.name}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="gap-x-2">
                                {project.links.map((link) => (
                                    <Button asChild key={link.name}>
                                        <Link href={link.url}>
                                            {<link.icon/>} {link.name}
                                        </Link>
                                    </Button>
                                ))}
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
      </div>
    )
}