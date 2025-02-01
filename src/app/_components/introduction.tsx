import { Avatar, AvatarImage } from "~/components/ui/avatar";

export function Introduction() {
    return (
        <div className="flex flex-row max-w-2xl gap-x-4 py-4">
            <Avatar className="w-32 h-32 shadow-2xl my-auto">
                <AvatarImage src="/main-avatar.jpg" />
            </Avatar>
            <div className="flex flex-col my-auto">
                <h1 className="text-2xl font-bold pb-2">Welcome! 👋</h1>
                <span className="text-xl pb-1">I'm Ben and I love designing and building things. I'm currently doing things in the navigation an geo-spatial application space.</span>
                <span className="text-sm text-gray-500">You can sometimes find me in the OpenStreetMaps Slack channels mostly in the #ferrostar channel.</span>
            </div>
        </div>
    );
}